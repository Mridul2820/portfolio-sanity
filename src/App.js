import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Pages 
import About from './pages/About'
import Home from './pages/Home'
import PostGrid from './pages/PostGrid'
import SinglePost from './pages/SinglePost'
import Projects from './pages/Projects'

// Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import GlobalStyle from './components/GlobalStyles'

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <NavBar />
            <Switch>
                <Route 
                    path="/" 
                    component={Home} 
                    exact 
                />
                <Route 
                    path="/about" 
                    component={About} 
                />
                <Route 
                    path="/blog/:slug" 
                    component={SinglePost} 
                />
                <Route 
                    path="/blog" 
                    component={PostGrid} 
                />
                <Route 
                    path="/projects" 
                    component={Projects} 
                />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App

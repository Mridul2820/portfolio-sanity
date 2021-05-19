import React from 'react'
import './styles/app.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Pages 
import About from './pages/About'
import Home from './pages/Home'
import Posts from './pages/Posts'
import SinglePost from './pages/SinglePost'
import Projects from './pages/Projects'

// Components


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/post/:slug" component={SinglePost} />
                <Route path="/post" component={Posts} />
                <Route path="/porjects" component={Projects} />
            </Switch>
        </BrowserRouter>
    )
}

export default App

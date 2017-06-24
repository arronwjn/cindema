import React from 'react'
import {Router,Route,browserHistory,IndexRoute,hashHistory} from 'react-router'
import Home from './Home.js'
import Index from './Index.js'
import Poster from './poster.js'
import Details from './details.js'
import Generate from './generate.js'

class App extends React.Component{
  render(){
    return(
      <Router history={hashHistory}>
        <Route path='/' component={Home}>
          <IndexRoute component={Index}/>
          <Route path='poster' component={Poster}/>
          <Route path='details' component={Details}/>
          <Route path='generate' component={Generate}/>
        </Route>
      </Router>
    )
  }
}


export default App;

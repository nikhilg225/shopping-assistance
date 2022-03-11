import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ClickImage } from './frontend/components/ClickImage'
import Home from './frontend/components/Home'
import './frontend/styles/styles.scss'


const App = () => {
  return (
  <div>
    <Switch>
    <Route path="/" exact={true} >
      <Home/>
    </Route>
    <Route path="/click-image">
          <ClickImage />
        </Route>
    </Switch>

  </div>
  
  )
}



export default App
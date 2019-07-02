import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom";
import Login from './auth/Login'
import Signup from './auth/Signup'
import Name from './auth/Name'


    
        
        
  const CustomRouter = ()=>{
      return (
        <Router>
      <Route path = '/Signup' component={Signup}></Route>
      <Route path='/Login' component={Login}></Route>
      <Route path="/Initials" component={Name}></Route>
   
            
        </Router>
    )
}
export default CustomRouter;
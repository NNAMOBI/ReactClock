import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import  Login from './components/auth/Login'
// import Nnamdi from './components/Nnamdi'
import Clock from './components/Clock'
// import Signup from './components/auth/Signup'
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';
// import Form from "react-bootstrap/Form"
// import CustomRouter from './components/Router'
// import Button from 'react-bootstrap/Button'



// function App() {
  
//   return (
//     <div className="">
//    <Login></Login>
   
//    </div>
//    )
// }
   
/* //      <h1>Signup</h1>

//      </div>

//       <form>
//         <Form.Group controlId="formBasicUsername">
//         <Form.Label>Username</Form.Label>
//     <Form.Control type="username" placeholder="Enter username" />
//   </Form.Group>

//   <Form.Group controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" placeholder="Enter email" />
//   </Form.Group>

//       <Form.Group controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group controlId="formBasicPassword">
//         <Form.Label>Confirm Password</Form.Label>
//         <Form.Control type="Confirm password" placeholder="Password" />
//       </Form.Group>

//       <Form.Group  controlId="formBasicEmail">
//     <Form.Label>Home address</Form.Label>
//     <Form.Control type="home address" placeholder="Enter address" />
//   </Form.Group>


//       <Form.Group controlId="formBasicChecbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//   </Button>
                


//               </form>
//     </div>
//   );
// } */

//  export default App;


 class App extends React.Component {

  constructor(props){
    super(props)
   this.state = {
      date: new Date()
    }
  } 
  
    // render(){ 
    //  return (
    // <div className=''>
       
    //      <Clock></Clock>
   
    //    <div>
    // )
    // }
    // }

    // export default App;

/* 
  //         /* <Signup></Signup> */
  /* //         <CustomRouter></CustomRouter> */
  // {/* //       </div> */} */}
        
  /* //     </div>
  //   )
   } 
   */



    render(){   
     return (
      <div className='App-header'>
       <div>
        <Clock></Clock>
     {/* </div>
         <div>
        <Login></Login> */}
      </div>
        
    </div>
     ) 
  }
 }
  
  export default App; 
  

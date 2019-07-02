import React from 'react'

function Signup() {
    return (
        
            
                <div className="Mybox"> 
            <h1>REGISTER TO CREATE YOUR ACCOUNT</h1>

              <form>
              <input type="text" name="fullname" placeholder="Enter your fullname" required/>
                <input type="text" name="username" placeholder="Enter your username" required/>
                <input type="text" name="email" placeholder="Enter your email" required/>
                <input type="password" name="password" placeholder=" Enter your password" required/> 
                <input type="password" name="confirm password" placeholder=" confirm your password" required/>      
                {/* <input  type="checkbox" name="agree" id="container" value="car" checked="checked" required/> */}
                {/* <span id="label">keep me signed in</span> */}

                <button className="social facebook">SIGN UP</button>

                 <h2>Back to Homepage</h2>



</form>
                
            </div>
        )
    
}

export default Signup;
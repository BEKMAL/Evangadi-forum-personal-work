import React from 'react'
import SignUp from '../../Components/SignUp/SignUp'
import bgnew from '../../Images/bgnew.png'
import About from '../../Components/About/About'
import classes from './Signuppage.module.css'
function Signuppage() {
  return (
   <div className={classes.signuppage__flex} style={{backgroundImage:`url(${bgnew})`}}>
   <SignUp/>
   <About/>
   </div>
  )
}

export default Signuppage
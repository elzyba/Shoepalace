import React from 'react';


const Footer = () => {
  return (
    <div style={{backgroundColor:"#0b18ce"}}>
     <br/>
    <div className="container" style={{color:"white"}} >
    <div className="row">
      <div className="col">
      <h3 >Information</h3>
      <a href="/" style={{color:"black"}}>Contact us</a><br/>
      <a href="/" style={{color:"black"}}>About Us</a><br/>
      
      </div>
      <div className="col">
      <h3 >Terms & Conditions</h3>
     
      <a href="/" style={{color:"black"}}>Privacy & Terms</a><br/>
      <a href="/" style={{color:"black"}}>Product Return Terms</a><br/>
     
      </div>
      <div className="col">
      <h3 >Contact</h3>
      
      <a href="/" style={{color:"black"}}>Email : shoepalace@gmail.com</a><br/>
      <a href="/" style={{color:"black"}}>Send Your Feedback</a><br/>
      </div>
    </div>
    <br/>
      <div className="row">
      <div className="col">
      <p className="text-center"> Copyright &copy; All Right Reserved</p> 
      </div>
      </div>
    </div>
    
    </div>
    
  );
};

export default Footer;
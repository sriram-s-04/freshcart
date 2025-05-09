import React from "react";
import login from "../img/account/Tablet login.gif";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Account = () => {
  return (
    <div>
      {/* nav */}
      <div className="account">
        <div className="nav_sec">
          <div className="row_1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30 "
              height="25 "
              fill="currentColor"
              class="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
            FreshCart
          </div>
          <div className="row_2">Already have an account? Sign in</div>
        </div>
      </div>  
      <br />  
      <br />
      <br />
      <br/>
      <br />
      {/* body */}
      <div className="account_body">
        <div className="account_body_1">
          <div className="align_center">
            <img src={login} style={{height: "400px"}} />
          </div>
          <div className="align_center"> 
          <Form>  
            <div>
          <div className="text_type">Sign in to FreshCart</div>
        
          <Form.Text className="text_subtype" >
          Welcome back to FreshCart! Enter your email to get started.
        </Form.Text>
        </div>
        <br />
        <br />
        
        <div className="form_div">  
      <Form.Group className="mb-3 form_acc_email" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email " />
        
      </Form.Group>

      <Form.Group className="mb-3 form_acc_password" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="****" />
      </Form.Group>
      <div  className="form_acc_checkboxrow">
      <Form.Group className="mb-3 form_acc_check" controlId="formBasicCheckbox" >
        <Form.Check type="checkbox" label="Remember me" />
        <Form.Text className="form_acc_atag" >
        Forgot password? <a href="#" className="font_color">Reset It</a>
        </Form.Text> 
      </Form.Group>

        
      </div>
      <Button  type="submit" className="btn_signin">
        Sign in
      </Button>
      <div className="form_acc_signup">   
      <Form.Text >
            Dont have an account?<a href="#" className="font_color">Sign up</a>
        </Form.Text>  
        </div>
      </div>        
    </Form>
          </div>  
        </div>    
      </div>
    </div>
  );
};    

export default Account;

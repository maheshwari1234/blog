import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap';
import { Lock } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { loginAction } from '../Redux/action/Loginaction';
import { useSelector, useDispatch } from 'react-redux'

function LoginForm(props) {
  const [inputs, setInputs] = useState({});
  const [valid,setValid]=useState({emailValid:false,passwordValid:false})
  // const [button, setButton] = useState(false)

  const success = useSelector((state) => state.login.success)
  const error = useSelector((state) => state.login.error)

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    validateForm(event.target.name, event.target.value)

  }



  const validateForm = (name, value) => {
    switch (name) {
      case "username":
        let emailRegex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
        if (value === "") {
          inputs.emailError = "Please enter the EmailId"
          setValid({emailValid:false})
        }
        else if (!(emailRegex.test(value))) {
          inputs.emailError = "Please enter the valid EmailId"
          setValid({emailValid:false})

        }
        else {
          inputs.emailError = " "
          setValid({emailValid:true})
          

        }
        break
      case "password":
        let passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
        if (value === "") {
          inputs.passwordError = "Please enter the password"
          setValid({passwordValid:false})
        }
        else if (!(passwordRegex.test(value))) {
          inputs.passwordError = "Password should contain min 8 characters including uppercase,lowercase,special character and number"
          setValid({passwordValid:false})
        }
        else {
          inputs.passwordError = " "
          setValid({passwordValid:true})

        }
        break
      default:
        break;
    }
  }

  if(valid.passwordValid && valid.emailValid){
    setValid(true)
  }


  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginAction(inputs.username, inputs.password))


  };
  if (success !== undefined) {
    props.history.push("/")
  }

  return (

    <React.Fragment>
      <div className="row">
        <div className="col-md-4 offset-4">
          <div className="card mt-5" >
            <div className="card-body">
              <center><Lock style={{ color: 'black', fontSize: '35' }} /></center>
              <Form onSubmit={handleSubmit}>
                <Form.Group margin="normal">
                  <Form.Label>Email<span className="text-danger">*</span></Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="username" id="Email"
                    onChange={handleInputChange} value={inputs.username} required />
                  <span className="text-danger">{inputs.emailError}</span>

                </Form.Group>
                <Form.Group margin="normal">
                  <Form.Label>Password<span className="text-danger">*</span></Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" id="Password"
                    onChange={handleInputChange} value={inputs.password}  required/>
                  <span className="text-danger">{inputs.passwordError}</span>
                </Form.Group>

                <Button variant="primary" type="submit" className="btn btn-block" disabled={!valid}>
                  Login</Button>
                <span className="text-success">{success !== undefined ? success : null}</span>
                <span className="text-danger">{error !== '' ? error : null}</span>

              </Form>
              <div>Don't have an Account?</div>
              <Link to="/register" style={{ color: 'blue' }}><center> Sign Up or Create an Account</center></Link>

            </div>
          </div>
        </div>
      </div>


    </React.Fragment>


  )
}

export default LoginForm
import React, {useContext, useState} from 'react'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from '../../Config/Firebase';

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit'

const initialState = {
  email: "",
  password: ""
}



export default function Login() {

  const [state , setState] = useState(initialState);

  const handleChange = (e)=>{
    const[name,value] = e.target
     setState({...state,[name]: value})
     console.log(state)
  }
  return (
    <>
{/* //   <h3>Heloo</h3>

//  <div className="container">
//   <div className="row">
//     <div className="col">
//       <div className="card">
//            <h3>Login Form</h3>
//             <hr />

//       </div>
//     </div>
//   </div>
//  </div> */}
      <MDBContainer fluid className="p-3 my-5 h-custom">

        <MDBRow>

          <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
          </MDBCol>

          <MDBCol col='4' md='6'>

            <div className="d-flex flex-row align-items-center justify-content-center">

              <p className="lead fw-normal mb-0 me-3">Sign in with</p>

              <MDBBtn floating size='md' tag='a' className='me-2'>
                <MDBIcon fab icon='facebook-f' />
              </MDBBtn>

              <MDBBtn floating size='md' tag='a' className='me-2'>
                <MDBIcon fab icon='twitter' />
              </MDBBtn>

              <MDBBtn floating size='md' tag='a' className='me-2'>
                <MDBIcon fab icon='linkedin-in' />
              </MDBBtn>

            </div>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"  onChange={handleChange}/>
            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={handleChange} />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>

            <div className='text-center text-md-start mt-4 pt-2'>
              <MDBBtn className="mb-0 px-5" size='lg' >Login</MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
            </div>

          </MDBCol>

        </MDBRow>

       

           

      </MDBContainer>
    </>

  )
}

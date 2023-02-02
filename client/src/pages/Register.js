import React, { useEffect, useState } from 'react'
import {Form,Input, message} from 'antd';
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Layouts/Spinner';


const Register = () => {
    const navigate=useNavigate();
     // Form Submit
const [loading,setLoading]=useState(false)

     const submitHandler=async(values)=>{
        // console.log(values);
        try{
                setLoading(true)
                await axios.post('/users/register',values);
                message.success('Registration Successful');
                setLoading(false);
              navigate('/login');  
        }catch(e){
            // res.status(500).json({err:e.message});
            console.log(e);

        }
 
        
    }

    // Prevent User
    useEffect(()=>{
        if(localStorage.getItem('user')){
            navigate('/');
        }
    },{navigate})
  return (
   
    <>
        <div className='register-page'  >
        {loading && <Spinner/>}
            <Form layout='vertical' onFinish={submitHandler}>
            <h1>Registration Form</h1>
                <Form.Item label='Name' name='name' >
                    <Input/>
                </Form.Item>
                <Form.Item label='Email' name='email' placeholder=
                'Enter Valid Email Id' >
                    <Input/>
                </Form.Item>
                <Form.Item label='Password' name='password' placeholder='Enter Password' >
                    <Input/>
                </Form.Item>
                <div className='d-flex'>
                <Link to='/login'>Already User? Click Here to Login</Link>
                </div>
                <div>
                <button className='btn btn-primary'>Register</button>

                </div>
            </Form>

        </div>
    </>
  )
}

export default Register
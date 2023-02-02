import {React, useState } from 'react'
import {Form,Input,message} from 'antd';
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';
import Spinner from '../components/Layouts/Spinner';


const Login = () => {
    const navigate=useNavigate();

    const [loading,setLoading]=useState(false);
    
         // Form Submit
         const submitHandler=async(values)=>{
                try{
                    setLoading(true);
                    const {data}=await axios.post('/users/login',values);
                    setLoading(false);
                    message.success('Login Successful');
                    localStorage.setItem('user',JSON.stringify({...data.user,password:" "}))
                    
                    navigate('/');
                }catch(e){
                    setLoading(false);
                    message.e("Oops! Something Went Wrong");
                }
            // console.log(values);
     
            
        }
  return (
   <>
    <div className='register-page'  >
    {loading && <Spinner/>}
            <Form layout='vertical' onFinish={submitHandler}>
            <h1>Login</h1>
              
                <Form.Item label='Email' name='email' placeholder=
                'Enter Valid Email Id' >
                    <Input/>
                </Form.Item>
                <Form.Item label='Password' name='password' placeholder='Enter Password' >
                    <Input/>
                </Form.Item>
                <div className='d-flex'>
                <Link to='/register'>New User? Click Here to Register</Link>
                </div>
                <div>
                <button className='btn btn-primary'>Login</button>

                </div>
            </Form>

        </div>

   </>
  )
}

export default Login
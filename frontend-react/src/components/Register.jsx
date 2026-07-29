import React,{useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Register = () => {

    const [username,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errors,setErrors] = useState({})
    const [success,setSuccess] = useState(false)
    const [loading,setLoading] = useState(false)

     const handleSubmit = async(e)=>{
      e.preventDefault();
      setLoading(true);
      setSuccess(false)
      const userDetails ={ username,email,password

        }
        try{
            const response = await axios.post("http://127.0.0.1:8000/api/v1/register/",userDetails)
            console.log("Response.dara==>",response.data)
            console.log("Registration Success")
            setErrors({})
            setSuccess(true)
            setUserName("")
            setEmail("")
            setPassword("")
              setTimeout(() => {
                setSuccess(false)
                }, 3000)


        }catch(error){
            console.log("Registration Error: ",error.response.data)
            setErrors(error.response.data)
            
        }finally{
            setLoading(false)
        }
     }
  return (
    <>
    <div className="container">
        <div className="row justify-content-center bg-light-dark p-5 rounded">
            <div className="col-md-6">
                <h3 className='text-light text-center mb-4'>Create an Account</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <input type="text" className='form-control ' placeholder='Enter User Name' value={username}  onChange={(e)=>setUserName(e.target.value)} />
                    <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small>
                    </div>
                    <div className="mb-3">
                    <input type="email" className='form-control ' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                    <input type="password" className='form-control' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>
                    </div> 
                     {success && <div className='alert alert-success'>Registration Suceesful</div>} 
                     {loading?<button type='submit' className='btn btn-info d-block mx-auto form-control ' disabled><FontAwesomeIcon icon={faSpinner} spin/>  Please Wait</button>: <button type='submit' className='btn btn-info d-block mx-auto form-control '>Register</button>}                 
                   
                   
                </form>  
            </div>
        </div>
    </div>
    </>  
  )
}

export default Register
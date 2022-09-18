import React,{useState} from 'react'

const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword] = useState('')
    const [ errorsObj , setErrorsObj ] = useState({})
    
    const errors = {}

    const runValidations = () => {
        if(email.length === 0){
            errors.email = 'email cannot be blank'
        }
    }

    const handleChange = (e) => {
        const attr = e.target.name
        if(attr === 'email'){
            setEmail(e.target.value)
        }else if(attr === 'password'){
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email : email,
            password : password
        }
        console.log(formData)
    }

  return (
    <div>
        <h2> Login To Your Account </h2>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='enter email' name='email' value={email} onChange={handleChange}/>
            <br/>
            <input type='text' placeholder='enter password' name='password' value={password} onChange={handleChange}/>
            <br/>
            <input type='submit' value='Login'/>
        </form>
            <button> cancel </button>
    </div>
  )
}

export default Login
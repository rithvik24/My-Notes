import React,{useState} from 'react'
import validator from 'validator'

const Register = () => {
    const [ username, setUserName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword] = useState('')
    const [ errorsObj, setErrorsObj] = useState({})

    const errors = {}

    const runValidations = () => {
        if(username.length === 0){
            errors.username = 'username cannot be blank' 
        }
        if(email.length === 0){
            errors.email = 'email cannot be blank'
        }else if(!validator.isEmail(email)){
            errors.email = 'invalid email format'
        }
        if(password.length === 0){
            errors.password = 'password cannot be blank'
        }else if(password.length < 8){
            errors.password = 'password should have minimum 8 characters'
        }
    }

    const handleCancel = () => {
        setUserName('')
        setEmail('')
        setPassword('')
    }
    const handleChange = (e) => {
        const attr = e.target.name
        if(attr === 'username'){
            setUserName(e.target.value)
        }else if(attr === 'email'){
            setEmail(e.target.value)
        }else if(attr === 'password'){
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidations()
        if(Object.keys(errors).length === 0){
            setErrorsObj({})
            const formData = {
                username : username,
                email : email,
                password : password,
            }
            console.log(formData)
        }else{
            setErrorsObj(errors)
        }
    }

  return (
    <div>
        <h2> Register With Us </h2>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='enter name' name='username' value={username} onChange={handleChange}/>
            { errorsObj.username &&  <span> <br/> {errorsObj.username} </span> }
            <br/>
            <input type='text' placeholder='enter email' name='email' value={email} onChange=
            {handleChange}/>
            { errorsObj.email && <span> <br/> {errorsObj.email} </span> }
            <br/>
            <input type='text' placeholder='enter password' name='password' value={password} onChange={handleChange}/>
            { errorsObj.password && <span> <br/> {errorsObj.password} </span> }
            <br/>
            <input type='submit' value='register'/>
        </form>
            <button onClick={handleCancel}> cancel </button>
    </div>
  )
}

export default Register
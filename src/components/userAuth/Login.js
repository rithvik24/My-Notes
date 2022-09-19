import React,{useState} from 'react'
import validator from 'validator'
import { useDispatch } from 'react-redux'
import { asyncLoginUser } from '../../actions/usersActions'

const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword] = useState('')
    const [ errorsObj , setErrorsObj ] = useState({})
    
    const errors = {}
    const dispatch = useDispatch()

    const handleCancel = () => {
        setEmail('')
        setPassword('')
    }

    const runValidations = () => {
        if(email.length === 0){
            errors.email = 'email cannot be blank'
        }else if(!validator.isEmail(email)){
            errors.email = 'inavlid email format'
        }
        if(password.length === 0){
            errors.password = 'password cannot be blank'
        }else if(password.length < 8){
            errors.password = 'password should have minimum of 8 characters'
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
        runValidations()
        if(Object.keys(errors).length === 0){
            setErrorsObj({})
            const formData = {
                email : email,
                password : password
            }
            const handleReset = () => {
                setEmail('')
                setPassword('')
            }
            dispatch(asyncLoginUser(formData,handleReset))
        }else{
            setErrorsObj(errors)
        }
    }

  return (
    <div>
        <h2> Login To Your Account </h2>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='enter email' name='email' value={email} onChange={handleChange}/>
            { errorsObj.email && <span> <br/> {errorsObj.email} </span> }
            <br/>
            <input type='text' placeholder='enter password' name='password' value={password} onChange={handleChange}/>
            { errorsObj.password && <span> <br/> {errorsObj.password} </span> }
            <br/>
            <input type='submit' value='Login'/>
        </form>
            <button onClick={handleCancel}> cancel </button>
    </div>
  )
}

export default Login
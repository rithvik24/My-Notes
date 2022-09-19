import React,{useState,useEffect} from 'react'
import { Link, Route , withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import { asyncLogoutUser } from '../../actions/usersActions'
import Account from './Account'

const NavBar = (props) => {
  const [ isLoggedIn , setIsLoggedIn ] = useState(false)

  const dispatch = useDispatch()

  const handleIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn)
  }
  
  const handleLogout = () => {
    const confirm = window.confirm('Are you sure?')
    if(confirm){
      dispatch(asyncLogoutUser(handleIsLoggedIn))
    }
  }

    useEffect(() => {
      if(localStorage.getItem('token')){
        setIsLoggedIn(true)
      }
  },[])

return (
    <div>
        <Link to='/'> Home </Link>
        {
          isLoggedIn ? (
            <>
              <Link to='/account'> Account </Link>
              <Link to={`${props.location.pathname}`} onClick={handleLogout} > Logout </Link>
            </>
          ) : (
            <>
              <Link to='/register'> Register </Link>        
              <Link to='/login'> Login </Link>
            </>
          )
        }
        <Route path='/' component={Home} exact={true}/>        
        <Route path='/register' component={Register}/>        
        <Route path='/login' render = { (props) => {
          return <Login {...props}  handleIsLoggedIn = {handleIsLoggedIn}/>
        } }/>
        <Route path = '/account' component = {Account}/>       
    </div>
  )
}

export default withRouter(NavBar)
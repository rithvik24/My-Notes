import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { asyncGetUser } from '../../actions/usersActions'

const Account = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetUser())
    },[])

    const user = useSelector((state) => {
        return state.user.data
    })

  return (
    <div>
        <h2> User Info </h2>
        { user.username && <p> Name : {user.username}  </p> } 
        { user.email && <p> Email : {user.email}  </p> }
        { user.createdAt && <p> Joined Date : {user.createdAt.slice(0,10)}  </p> }
    </div>
  )
}

export default Account
import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { asyncGetUser } from '../../actions/usersActions'

const Account = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetUser())
    },[])

    const {user} = useSelector((state) => {
        return state
    })

  return (
    <div>
        <h2> User Info </h2>
        {
          user.isLoading ? (
            <>
              <h3> Loading... </h3>
            </>
          ) : (
            <>
              { user.data.username && <p> Name : {user.data.username}  </p> } 
              { user.data.email && <p> Email : {user.data.email}  </p> }
              { user.data.createdAt && <p> Joined Date : {user.data.createdAt.slice(0,10)}</p> }
            </>
          )
        }
    </div>
  )
}

export default Account
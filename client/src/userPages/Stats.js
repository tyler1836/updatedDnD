import React from 'react'
import {useQuery, useMutation} from '@apollo/client'
import {QUERY_USERS} from '../utils/queries'

function Stats(props) {
  const { loading, data } = useQuery(QUERY_USERS)
  const users = data?.users || []
  console.log(users);
  if(loading){
    return <div>Loading...</div>
  }
  return (
    <div>
      {users.map(user => {
        console.log(user.isGm);
        return (
          <div>
          {(user.isGm) ? 
          <div>
            {user.username}
          </div> 
          : 
          "" 
        }
        </div>
        )
    }
    )}
    <h3>{users[0].isGm}</h3>
    </div>
  )
}

export default Stats
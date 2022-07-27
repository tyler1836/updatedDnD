import React from 'react'
import Stack from 'react-bootstrap/Stack'

function Signup() {
  return (
    <div className='loggedIn'>
      <Stack direction='vertical' gap={3} className="login">
        <input type="text" />
        <label htmlFor=""></label>
        <input type="text" />
        <label htmlFor=""></label>
        <button>Submit</button>
      </Stack>
      <Stack direction='vertical' gap={3} className="signup">
        <input type="text" />
        <label htmlFor=""></label>
        <input type="text" />
        <label htmlFor=""></label>
        <input type="text" />
        <label htmlFor=""></label>
        <button>Submit</button>
      </Stack>
    </div>
  )
}

export default Signup
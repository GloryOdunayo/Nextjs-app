import Link from 'next/link'
import React from 'react'

const Users = (props) => {
  return (
    <div>{props.users.map((user)=>(
      <div key={user.id}>
        {user.name}
        <Link href="/users">Link to User</Link>
      </div>
    ))}</div>
  )
}

export default Users


export const getStaticProps=async()=>{
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await response.json()
    return {
      props:{users:data}
    }
}
import { useRouter } from 'next/router'
import React from 'react'

const Parameter = () => {
    let router = useRouter()
    let username = router.query.username
  return (
    <div>Parameter {username}</div>
  )
}

export default Parameter
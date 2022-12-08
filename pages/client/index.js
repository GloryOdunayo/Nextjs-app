import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
const fetcher= async ()=>{
  const response = await fetch('http://localhost:4000/product/1')
  const data = await response.json()
  return data.singleproduct
}

const ClientFetching = () => {
    const {data,error}=useSWR('client', fetcher)
    if (error) return <div>Failed to Load</div>
    if(!data) return <div>Loading...</div>
    // const [data, setdata] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //   getApi()
    // })

    // const getApi =async ()=>{
    //     let response = await fetch("http://localhost:4000/product")
    //     let data = await response.json()
    //     setdata(data.allproducts)
    //     setLoading(false)
    //     console.log(data);
    // }
    
  return (
    <div>ClientFetching
        <h1>{data.name}</h1>
        <p>{data.price}</p>
    </div>
  )
}

export default ClientFetching
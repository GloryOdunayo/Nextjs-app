import React from 'react'
import { useRouter } from 'next/router'

const SingleGoods = ({goods}) => {
    let router = useRouter()
    if(router.isFallback){
            return <div>Loading...</div>
    }
  return (
    <div>
        
        <h1>{goods.name}</h1>
        <p>{goods.price}</p>
    </div>
  )
}

export default SingleGoods

export async function getStaticPaths(){
    return{
        paths:[
            {params:{id:"1"}},
            {params:{id:"2"}},
            {params:{id:"3"}}
        ],
        fallback:true
    }
}

export async function getStaticProps(context){
    console.log("revalidating")
    let response = await fetch(`http://localhost:4000/product/${context.params.id}`)
    let data = await response.json()
    return {
        props:{goods:data.singleproduct},
        revalidate: 10
    }
}
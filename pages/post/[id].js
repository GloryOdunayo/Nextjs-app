import { useRouter } from 'next/router'
import React from 'react'

const MoreDetails = ({post}) => {
    let router = useRouter()
    if(router.isFallback){
        return <div>Loading...</div>
    }
  return (
    <div>
        <h1>{post.id} {post.title}</h1>
    </div>
  )
}

export default MoreDetails

export async function getStaticPaths(){
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    let data = await response.json();
    let paths = data.map((post)=>{
        return{params:{id: `${post.id}`}}
    })
    // return {
    //     paths: paths,
    //     fallback:false
    // }

    return {
        paths:[
            {params:{id:'1'}},
            {params:{id:'2'}},
            {params:{id:'3'}},
        ],
        fallback:true
        // fallback:'blocking',
    }
}

export async function getStaticProps(context){
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    let data = await response.json();
    return {
        props:{post:data}
    }
}
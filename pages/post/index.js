import Link from 'next/link';
import React from 'react'

const Post = ({posts}) => {
  return (
    <div>
        {posts.map((posts)=>(
            <div key={posts.id}>
                <Link href={`/post/${posts.id}`}></Link>
                <h1 className='text-danger'>{posts.id} {posts.title}</h1>
                <hr />
            </div>
        ))}
    </div>
  )
}

export default Post

export async function getStaticProps(){
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    return {
        props:{posts:data}
    }
}
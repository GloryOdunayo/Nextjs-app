import React from 'react'

const SingleGood = ({good}) => {
  return (
    <div>SingleGood
        <h1>{good.name}</h1>
        <p>{good.price}</p>
    </div>
  )
}

export default SingleGood

export async function getServerSideProps(context){
    let response = await fetch(`http://localhost:4000/product/${context.params.id}`)
    let data = await response.json()
    return{
        props:{
            good: data.singleproduct
        }
    }
}
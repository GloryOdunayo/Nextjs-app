import React from 'react'

const Goods = ({goods}) => {
  return (
    <div>Goods
        {goods.map((goods)=>(
            <div key={goods.id}>
                <h1>{goods.name}</h1>
                <p>{goods.price}</p>
            </div>
        ))}
    </div>
  )
}

export default Goods

export async function getServerSideProps(){
    let response = await fetch("http://localhost:4000/product")
    let data = await response.json()
    return {
        props:{
            goods:data.allproducts
        }
    }
}
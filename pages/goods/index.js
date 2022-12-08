import React from 'react'

const Goods = ({goods}) => {
  return (
    <div>
        {goods.map((good)=>(
            <div key={good.id}>
                <h1>{good.name}</h1>
                <p>{good.price}</p>
            </div>
        ))}
    </div>
  )
}

export default Goods

export async function getStaticProps(){
    let response = await fetch("http://localhost:4000/product")
    let data = await response.json()
    return {
        props:{goods:data.allproducts}
    }
}
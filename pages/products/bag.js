import { useRouter } from 'next/router'
import React from 'react'

const Bag = () => {
    let router = useRouter()
    const takeUsHome=()=>{
        alert("Hello World");
        router.push("/");
    }
    const takeMeBack = () => {
        alert("Hello World");
        router.back()
    }
  return (
    <div>Bag
        <button type="submit" className="btn bg-info" onClick={takeUsHome}>Take me Home</button>
        <button type="submit" className="btn bg-info" onClick={takeMeBack}>Take me Back</button>
    </div>
  )
}

export default Bag
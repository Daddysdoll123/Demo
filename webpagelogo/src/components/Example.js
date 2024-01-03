import React, { useEffect, useState } from 'react'

function Example() {
    const [postdata,setData]=useState([])  
    useEffect(()=>{
        const api="https://jsonplaceholder.typicode.com/posts"
        fetch(api)
        .then(res=>res.json())
        .then((data)=>{
        console.log(data)
        setData(data)
    }).catch(err=>console.log(err))
},[])
  return (
    <div>
        {postdata.map(post=>
        <div key={post.id}>
            <h1>Title:{post.title}</h1>
            <p>Body:{post.body}</p>
            </div>
        )}
        </div>
  )
}

export default Example
import React from 'react'
import { useParams } from 'react-router-dom'

const Demo = () => {

    const {id}  = useParams()

    // // We use id to featch data from api like this :
    // const fetchApi(){
    //     AXIOS(`url/${id}`)
    // }

  return (
    <div>
      <div style={{color : 'grey', margin : '5px'}}>This page is redirected from the contact page</div>
      the id from route is : <span style = {{color : 'red'}}>  {id} </span>
    </div>
  )
}

export default Demo
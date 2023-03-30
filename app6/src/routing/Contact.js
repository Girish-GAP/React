import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    const navigate = useNavigate()

    useEffect(()=>{
        navigate("/demo/123abc")
    },[])
  return (
    <div>
        {/* This component will redirect to the root */}
    </div>
  )
}

export default Contact
import React from 'react'
import '../CSS/Main.css'
import '../CSS/Bodyimage.css'

function Bodyimage(props) {
  return (
    <>

         <a href = {props.image} target = "new"><img src = {props.image} /></a> 

    </>
  )
}

export default Bodyimage
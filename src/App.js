import React, {useEffect, useState} from 'react'
import Bodyimage from './components/Bodyimage'
import Search from './components/Search'
import './CSS/App.css'
import './CSS/Bodyimage.css'
import './CSS/Search.css'
import './CSS/Main.css'

function App() {
  const [image, setimage] = useState([])
  const [isloading, setisloading] = useState(true)
  const [term, setterm] = useState("")

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=28073605-eb5bbf72074ca81ce4c12ce79&q=${term}&image_type=photo&pretty=true`)
    .then((res) => res.json())
    .then((data) =>{
      setimage(data.hits);
      setisloading(false);
    } )
    .catch(err => console.log(err));
  }, [term]);

  return (
    <>
            
      <div className="flex_search">
      <div className="search">
        <div className="search_btn">
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <input 
        type = "search" 
        placeholder='Search....' 
        onChange={e=>setterm(e.target.value)}/>
      </div>
      </div>

       <div className="Bodyimage_container">
          {image.map(data =>(<Bodyimage key = {data.id} image = {data.webformatURL}/>)
          )}
       </div>
    </>
  )
}

export default App


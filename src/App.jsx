import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import SearchImage from './Components/SearchImage'
import ImagesBox from './Components/ImagesBox'

const AccessKey = "OxuQ65ExEUDA4sdjVgtnjZHisemL67lBmxHNz1MeyZQ"


function App() {
  
  const [input, setInput] = useState("");
  const [images , setImages] = useState([]);

  


  const fetchingData = async()=>{
  
    const API = `https://api.unsplash.com/search/photos?page=3&query=${input}&client_id=${AccessKey}&per_page=20`

    try{
      const response = await axios.get(API)
          const dataReceived = response.data.results
        setImages(dataReceived);
     
      }
      
    catch(error){
      console.error('Error fetching data from Unsplash', error);
    }
  }


  const handleSubmitbtn = ()=>{
    if (input.trim()) {
      fetchingData();
      setInput("");
    } else {
      alert("Input is empty. Please enter something.");
    }
  }


  const onChangeInput = (value)=>{
    setInput(value)
}
// if(images)(
//   console.log(images[0].urls.regular)
// )

  return (
    <>
      <SearchImage  handleChange={onChangeInput} Input={input} handleSubmit={handleSubmitbtn}/>
      <ImagesBox  apiData={images}/>
    </>
  )
}

export default App

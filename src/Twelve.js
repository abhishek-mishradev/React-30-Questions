import React, { useState } from 'react'

const Twelve = () => {

    const [file, setFile] =useState(null);

    const handleChnage= (e)=>{
        const selectedFile= e.target.files[0]
        setFile(selectedFile)

    }


  return (
    <div>
        <input type="file" accept='images/*' onChange={handleChnage}/>
        {file && <img src={URL.createObjectURL(file)} alt="uploaded image" />}
    </div>
  )
}

export default Twelve
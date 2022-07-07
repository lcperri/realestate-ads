import React, { useState } from 'react'
import DivContainer from '../../styledComponents/DivContainer'
import { Input } from '../../styledComponents/StyledFormElements'
import styles from './styles.module.css'

const Cloudinary = ({ getImages }) => {
    const [image, setImage] = useState("")
    const [loading, setloading] = useState(false)    

    const uploadImage =  async (files) => {
        const data = new FormData()
        data.append('file', files[0])
        data.append("upload_preset", "o7plh3sw")
        setloading(true)
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/real-estate-ads/image/upload",
            {
                method: "POST",
                body: data,
            }
        )
        const file = await res.json()
        setImage(file.secure_url)
        getImages(file.secure_url)
        setloading(false)
    }

    return (
        <div className={styles.wrapper}>
            {/* <CloudinaryContext cloudName="real-estate-ads">
                <div>
                    <Image publicId="sample" width="50" />
                </div>
                <Image publicId="sample" width="0.5" />
            </CloudinaryContext> */}
                <input
                    type='file'    
                    name='file'
                    placeholder='Sube tu imagen aquí'
                    onChange={e => uploadImage(e.target.files)}
                >
                </input>
                
                {image && <img src={image} placeholder='upload preview' />}
        </div>
    )
}

export default Cloudinary

// import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config (
//     cloud_name = 'real-estate-ads',
//     api_key = '977744573767923',
//     api_secret = 'aJN3RgVBZzfblwwxw7xDybiaHN4'
// )

// module.exports = cloudinary;

//     const handleImage = (e) => {
//         const file = e.target.files
//         setFileToBase(file)
//         console.log(file);
//     }
    
//     const setFileToBase = (file) => {
//         const reader = new FileReader()
//         reader.readAsDataURL(file)
//         reader.onloadend = () => {
//         setImage(reader.result)
//         }
//     }
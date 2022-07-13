import React, { useState } from 'react'
import styles from './styles.module.css'
import { DivRow } from '../../styledComponents/DivRow'
import noImage from '../../assets/noimage.png'
import remove from '../../assets/remove.png'

const Cloudinary = ({ getImages }) => {
    const [image, setImage] = useState("")
    const [loading, setloading] = useState(false)    
    const data = new FormData()

    const uploadImage =  async (files) => {
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
        getImages(image)
        setloading(false)
    }

    const removePicture = () => {
        setImage('')
        data.delete(files[0])
        data.delete('file')
        data.delete("upload_preset")
        data.delete("o7plh3sw")
    }

    return (
        <div className={styles.wrapper}>
                <input
                    type='file'    
                    name='file'
                    placeholder='Sube tu imagen aquí'
                    onChange={e => uploadImage(e.target.files)}
                />
                
                <DivRow>
                    { loading 
                        ? <DivRow padding='30px 10px 10px 10px'><b>Loading ...</b></DivRow>
                        : <DivRow>
                            <img src={image || noImage} className={styles.imgPreview} placeholder='upload preview' />
                            { image && <img src={remove} className={styles.removeBtn} onClick={() => removePicture()} />}
                          </DivRow>
                    }
                    
                </DivRow>

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
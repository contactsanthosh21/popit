import React from 'react'

const ImageCard = ({src,alt,className}) => {
  return (
    <img
    src={src}
    className={className}
    alt={alt}
    />
  )
}

export default ImageCard
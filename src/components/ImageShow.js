import React from 'react'

const ImageShow = ({ image }) => {
    return (
        // <div>{image.alt_description}</div>
        <div>
            <img src={image.urls.small} alt={image.alt_description} />
        </div>
    )
}

export default ImageShow
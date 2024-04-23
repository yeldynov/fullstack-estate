import { useState } from 'react'
import './slider.scss'

function Slider({ images }) {
    const [imageIndex, setImageIndex] = useState(null)

    const handleKeyDown = (e) => {
        // arrow up/down button should select next/previous list element
        if (e.keyCode === 38) {
            if (imageIndex === 0) {
                setImageIndex(images.length - 1)
            } else setImageIndex(imageIndex - 1)
        } else if (e.keyCode === 40) {
            if (imageIndex === images.length - 1) {
                setImageIndex(0)
            } else setImageIndex(imageIndex + 1)
        }
    }

    const changeSlide = (direction) => {
        if (direction === 'left') {
            if (imageIndex === 0) {
                setImageIndex(images.length - 1)
            } else setImageIndex(imageIndex - 1)
        } else {
            if (imageIndex === images.length - 1) {
                setImageIndex(0)
            } else setImageIndex(imageIndex + 1)
        }
    }

    return (
        <div className='slider'>
            {imageIndex !== null && (
                <div className='fullSlider'>
                    <div className='arrow' onClick={() => changeSlide('left')}>
                        <img src='/arrow.png' alt='' />
                    </div>
                    <div className='imgContainer'>
                        <img src={images[imageIndex]} alt='' />
                    </div>
                    <div className='arrow' onClick={() => changeSlide('right')}>
                        <img src='/arrow.png' className='right' alt='' />
                    </div>
                    <div className='close' onClick={() => setImageIndex(null)}>
                        &#x2715;
                    </div>
                </div>
            )}
            <div className='bigImage'>
                <img src={images[0]} alt='' onClick={() => setImageIndex(0)} />
            </div>
            <div className='smallImages'>
                {images.slice(1).map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt=''
                        onClick={() => setImageIndex(index + 1)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider

import React, { useState } from 'react'

function Carousel({ images }) {
    const [index, setIndex] = useState(0);

    const hanldeNextAndPrev = (val) => {
        if (val == 1) {
            if (index === images.length - 1) setIndex(0)
            else setIndex(prev => prev + 1);
        } else {
            if (index === 0) setIndex(images.length - 1);
            else setIndex(prev => prev - 1);
        }
    }

    return (
        <div className='flex flex-col' style={{ gap: "2rem" }}>
            <div className='' style={{ height: "400px" }}>
                <img src={images[index]} alt='product' className='product-image' />
            </div>
            <div className="btn-group flex" style={{ gap: "0.4rem" }}>
                <button className="btn" onClick={() => hanldeNextAndPrev(-1)}>Prev</button>
                <button className="btn" onClick={() => hanldeNextAndPrev(1)}>Next</button>
            </div>
        </div>
    )
}

export default Carousel
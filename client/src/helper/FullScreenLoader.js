import React from 'react';
import loaderImg from "../Assets/images/loader.svg"

const FullScreenLoader = () => {
    return (
        <div className='processingDiv'>
            <div className="centerScreen text-center">
                <img className='loaderSize ' src={loaderImg} alt="loading" />
            </div>
        </div>
    );
};

export default FullScreenLoader;
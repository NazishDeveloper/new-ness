import React from 'react';
const  ProductListLoader = ()=>{
    return (
        <>
        <div className="loader" key={0}>
            <div className="spinner-grow spinner-grow-sm text-primary"></div> 
            <div className="spinner-grow spinner-grow-sm text-primary"></div> 
            <div className="spinner-grow spinner-grow-sm text-primary"></div>
        </div>
        </>
    )
}
export default ProductListLoader;
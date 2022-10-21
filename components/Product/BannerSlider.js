import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const BannerSlider = ({product,activeIndex,handleColorSelect,productColors})=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ImageList,setImageList] = useState([]);
    // const [CrrActiveIn,setCrrActiveIn] = useState(activeIndex);

    // const productColors = colorOptions();
    // const FilterImage = ()=>{
    // }

    React.useEffect(()=>{
        let FinalImages = [];
        // alert(activeIndex)
        if(activeIndex){
            for (let index = 0; index < product.images.length; index++) {
                if(activeIndex===index){
                    const ImageDlement = product.images[index];
                    FinalImages.push(ImageDlement);
                }
            }
        }else{
            // console.log(product.images)
            // setImageList(product.images);
            for (let index = 0; index < product.images.length; index++) {
                const ImageDlement = product.images[index];
                FinalImages.push(ImageDlement);
            }
        }
        setImageList(FinalImages);


    },[activeIndex])

    return (
        <>
        

        {(ImageList) &&
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode]}
            breakpoints={{
            400: {
                width: 400,
                slidesPerView: 1,
            },
            640: {
                width: 640,
                slidesPerView: 1,
            },
            768: {
                width: 768,
                slidesPerView: 1,
            },
            }}
        >
                {ImageList.map((SingleImg,imi)=>(
                    <SwiperSlide key={imi}>
                        <div className='pdc-image' onClick={handleShow}>
                            <img src={SingleImg} alt={product.name} style={{width: '500px',height:'auto'}} />
                        </div>  
                    </SwiperSlide>
                ))}
            </Swiper>
            }
        


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>{product.name} Images</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
            <div className='' >


                <div className='full-slider'>
                {(ImageList) &&
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode]}
            breakpoints={{
            400: {
                width: 400,
                slidesPerView: 1,
            },
            640: {
                width: 640,
                slidesPerView: 1,
            },
            768: {
                width: 768,
                slidesPerView: 1,
            },
            }}
        >
                {ImageList.map((SingleImg,imi)=>(
                    <SwiperSlide key={imi}>
                        <div className='pdc-image' onClick={handleShow}>
                            <img src={SingleImg} alt={product.name} style={{width: '100%',height:'auto',objectFit:'cover'}} />
                        </div>  
                    </SwiperSlide>
                ))}
            </Swiper>
            }
        

                </div>
                <br/>

                {product.all_options.length > 0 && product.all_options.map((option, idx) => {
                    if (option.label === 'color') {
                        return <div key={idx} className="pdc-color-selector">
                        <div className="card-body text-center">
                            <div className="pdc-colors text-center" >
                                {/* <Swiper
                                    slidesPerView={3.3}
                                    spaceBetween={10}
                                    freeMode={true}
                                    modules={[FreeMode]}
                                    breakpoints={{
                                    640: {
                                        width: 600,
                                        slidesPerView: 3.3,
                                    },
                                    768: {
                                        width: 768,
                                        slidesPerView: 5,
                                    },
                                    }}
                                >
             */}
                            {productColors.map((citem, cidx) => 
                            // <SwiperSlide key={cidx}>
                                        <div key={citem.id ? citem.id : cidx} className='pdc-colorbox' 
                                            style={{width: '90px',height:'90px'}}
                                            >
                                            <Image
                                            src={citem.image}
                                            height={100}
                                            width={100}
                                            alt=""
                                            onClick={() => {handleColorSelect(citem.image,cidx)}}
                                            />
                                        </div>
                            // </SwiperSlide>
                            )}
                            {/* </Swiper> */}
                            </div>
                        </div>
                        </div>
                    }
                })}
            </div>
        </Modal.Body>
      
      </Modal>



        </>
    )
}
export default BannerSlider;
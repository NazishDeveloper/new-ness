import React from 'react';
import Image from "next/image"; 
import Link from "next/link";
import { useEffect } from "react";
// import {  getToken } from ""; 
import { getToken } from "../../../../../layout/utils";



export default function RightContainer(props) {
 
  let subSubCategories = props.subSubCategories ? props.subSubCategories : [];
  const parentCatId      = props.parentCatId ? props.parentCatId : '73';
  const ActiveCatName    = props.ActiveCatName || ''; 
  const ActiveCatImage   = props.ActiveCatImage||'';
  const parentCategory   = props.parentCategory;
  const APIUrl           = process.env.NEXT_PUBLIC_API_URL;

  const [CatList,setCatList] = React.useState(props.subSubCategories || []);

  const fetchHomeData = async () => {
    const token = getToken();
    let CCode           = localStorage.getItem('countryCode');
    let localCat        = localStorage.getItem('activeCategory');
    let activeCategory  = (localCat)?JSON.parse(localCat) : {};

    try {
      console.log(activeCategory.id,CCode)
      const res = await fetch(`${APIUrl}/${CCode.toLowerCase()}/V1/wt-home/${activeCategory.id}/${token}`, {
        headers: { Authorization: `Bearer ${token}`,'Content-Type':'application/json' }
      })
      const data = await res.json();
      setCatList(data.top_brands);

    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{
    if(ActiveCatName==='Brands'){
      fetchHomeData();
    }else{
      setCatList(subSubCategories)
    }
  },[ActiveCatName])

  return (

    <>
    
     
    <div className={`sub-category-right ${ActiveCatName==='Promotions'?'promo':''} `}>


    {ActiveCatName !== 'Promotions'  && ActiveCatName !== 'Brands'  && <>
    <div className="sub-category-list-right">
      <div className="single-sub-cat" >
        <Link href={{ pathname: '/products', query: { catId: parentCategory.id, pCatId: parentCatId } }} >
        <img src={ActiveCatImage}  alt={ActiveCatName} className="sub-cat-banner"/>
        </Link>
      </div>
      <b className="cat-tittle">Shop By Category </b>
    </div>
    </>}


      {ActiveCatName !== 'Brands' ? <>

      {subSubCategories && subSubCategories.map((category,i) => ( category.is_active && category.category_image && 
      (ActiveCatName==='Promotions')? <>
      <div className="subSubcategorycard promotional" key={category.id}>
          <Link href={{ pathname: '/products', query: { catId: category.id, pCatId: parentCatId } }}>
            <img src={category.category_image} className="sub-cat-img"  />
          </Link>
          {/* <p className="text">{category.name}</p> */}
        </div>
      </>:<>
      <div className="subSubcategorycard" key={category.id}>
          <Link href={{ pathname: '/products', query: { catId: category.id, pCatId: parentCatId } }} >
            <img src={category.category_image} className="sub-cat-img"  />
          </Link>
          <p className="text">{category.name}</p>
        </div>
      </>
      ))}

      {subSubCategories.length === 0 &&  <div className="notextfound">No records found.</div>}


      </> : 
      <> 
      {/* Print All Brand Here */}
      {CatList.map((SingleCat,ind)=>(
        (SingleCat.small_image) && 
        <>
           <div className="subSubcategorycard brand-cards" key={SingleCat.id}>
          <Link href={{ pathname: '/products', query: { catId: SingleCat.id, pCatId: parentCatId } }} >
            <img src={SingleCat.small_image} className="sub-cat-img"  />
          </Link>
          <p className="text">{SingleCat.brand_name}</p>
        </div>
        </>
      ))}
      </>}

    



    </div>
    </>
  );
}

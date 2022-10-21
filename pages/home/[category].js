import React from 'react';
import MainHomeContent from "../../components/home/mobile/MainHomeContent/MainHomeContent";
import { useRouter } from "next/router";

const HomeCategoryPage = (props) => {

  const router = useRouter() 

  const [category,setCategory] = React.useState({});

  React.useEffect(()=>{
    let localCat        = localStorage.getItem('activeCategory');

  if(localCat && localCat !== undefined && localCat !== null){
    let activeCategory  = (localCat)?JSON.parse(localCat) : {};
    setCategory(activeCategory);
  }else{
    router.push('/top-categories');
  }

  },[])
  
  return (
    <>
     {/* <MainHomeContent {...props} catId={category?.id} catIndex={router.query.idx} /> */}
    {category && <><MainHomeContent {...props} catId={category?.id} catIndex={0} /> </>}

    </>
  );
}

export default HomeCategoryPage
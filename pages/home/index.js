
import { useRouter } from "next/router";
import React from "react";
import MainHomeContent from "../../components/home/mobile/MainHomeContent/MainHomeContent";
export default function Home(props) {

  const [category,setCategory] = React.useState({});
  const router = useRouter() 


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
    {category && <><MainHomeContent {...props} catId={category?.id} catIndex={0} /> </>}
    </>
  );
}

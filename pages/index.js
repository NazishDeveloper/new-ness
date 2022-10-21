import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Splash = () => {

  const router = useRouter();

  useEffect(() => {

   // On Load Redirect To Respective Pages
   const countryCode = localStorage.getItem('countryCode')
   const activeCategory = localStorage.getItem('activeCategory');
   if (countryCode && countryCode !== undefined && countryCode !== null) {
    
    if(activeCategory && activeCategory !== undefined && activeCategory !== null){
      router.push('/home')
    }else{
      router.push('/top-categories')
    }

   } else {
    router.push('/select-country')
   }

  // Push to select country
  // router.push('/select-country')

  }, [router])
  

  return (
    <Image width='210' height='43' className="white-logo" src="/logo.png" alt="Newness" />
  );
}

export default Splash
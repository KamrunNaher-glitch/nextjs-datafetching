"use client";
import { usePathname, useRouter } from 'next/navigation';


import React, { useEffect, useState } from 'react';

export default function MealSearchInput() {
    const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState('');
  const router = useRouter();
  const pathName = usePathname();

   useEffect(() =>{
    const searchQuery = {search}
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathName}?${urlQueryParam}`;
    router.push(url)
   },[search])
  return (
    
        <div className='  '>
          <div className='bg-stone-500 p-5 '>
            <input value={search} onChange={(e) => setSearch(e.target.value)  } />
        </div>
        </div>
  )
}

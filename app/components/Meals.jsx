import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function fetchAllCategories() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const randomRecipe = await response.json();
  return randomRecipe;
}

const Meals = async () => {
     const randomRecipe = await fetchAllCategories();
  return (
    <div className='mt-20 grid grid-cols-2 md:grid-cols-5 gap-5 p-3 '>
        {randomRecipe.categories.map((category) =>(
            <Link href={`/${category.strCategory}`}>
                 <div className='flex flex-col justify-center items-center p-2 cursor-pointer border-2 border-green-200 hover:scale-110 hover:shadow-2xl transition-all shadow-lg rounded-md '>
                <Image src={category.strCategoryThumb}
                height={300}
                width={300}
                className='object-contain'/>
                <h1 className='text-xl font-semibold mt-3'>{category.strCategory}</h1>
            </div>
            </Link>
        ))}
    </div>
  )
}

export default Meals
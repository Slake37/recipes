import Image from "next/image";
import Link from "next/link";

async function fetchMealsFromCategory(name) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
  );
  const mealsFromCategory = await response.json();
  return mealsFromCategory;
}


const SigleCategoryPage = async ({params:{name}}) => {
    const meals = await fetchMealsFromCategory(name);
  return (
    <div className='mt-5 flex flex-col justify-center items-center'>
        <h1 className='text-3xl p-3 shadow-xl w-fit font-bold text-green-700'>{name} meals</h1>
        <div className="grid grid-cols-2 gap-5 mt-5 p-3 md:grid-cols-4">
            {meals.meals?.map((meal) => (
                <Link href={`/${name}/${meal.strMeal}`}>
                   <div className="flex flex-col justify-center items-center p-2 border-2 border-green-200 hover:scale-110 transition-all shadow-lg">
                    <Image src={meal.strMealThumb}
                height={150}
                width={150}
                className='object-contain rounded-full border-2 border-green-200'/>
                <h1>{meal.strMeal}</h1>
                </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SigleCategoryPage
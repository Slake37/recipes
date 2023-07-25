

import Image from "next/image";


async function fetchMeal(nameofrecipe) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${nameofrecipe}`
  );
  const meal = await response.json();
  return meal;
}

const IndividualRecipePage = async ({params:{nameofrecipe}}) => {
    const meal = await fetchMeal(nameofrecipe);
  return (
    <div className=" w-full mt-5">
        {meal.meals?.map((meal) =>(
          <div className="flex flex-col justify-start items-start max-w-[720px] m-auto">
            <div className="flex flex-col md:flex-row">
              <Image src={`${meal.strMealThumb}`} height={300} width={300} alt={meal.strMeal} className="object-contain w-full max-h-[50vh] rounded-md drop-shadow-xl flex-[0.1]"/>
            <div className="mt-5 flex flex-col justify-start items-start flex-[0.9] text-left w-full px-5">
             <h1 className="text-3xl font-bold underline text-green-800 shadow-xl">{meal.strMeal}</h1>
            <h2 className="text-2xl font-semibold">{meal.strArea} meal</h2>
            <h2 className="text-xl font-semibold mt-3">Ingredients:</h2>
            <ul className="list-disc grid grid-cols-2 md:grid-cols-3 justify-center w-full items-start ml-2 gap-1">
              <li className={meal.strIngredient1 ? 'text-sm mr-2' : 'hidden'}>{meal.strMeasure1} {meal.strIngredient1}</li>
              <li className={meal.strIngredient2 ? 'text-sm mr-2' : 'hidden'}>{meal.strMeasure2} {meal.strIngredient2}</li>
              <li className={meal.strIngredient3 ? 'text-sm mr-2' : 'hidden'}>{meal.strMeasure3} {meal.strIngredient3}</li>
              <li className={meal.strIngredient4 ? 'text-sm mr-2' : 'hidden'}>{meal.strMeasure4} {meal.strIngredient4}</li>
              <li className={meal.strIngredient5 ? 'text-sm mr-2' : 'hidden'}>{meal.strMeasure5} {meal.strIngredient5}</li>
              <li className={meal.strIngredient6 ? 'text-sm mr-2' : 'hidden'}>{meal.strMeasure6} {meal.strIngredient6}</li>
              <li className={meal.strIngredient7 ? 'text-sm mr-2' : 'hidden'}>{meal.strMeasure7} {meal.strIngredient7}</li>
              <li className={meal.strIngredient8 ? 'text-sm mr-2' : 'hidden'}>{meal.strMeasure8} {meal.strIngredient8}</li>
              <li className={meal.strIngredient9 ? 'text-sm mr-2' : 'hidden'}>{meal.strMeasure9} {meal.strIngredient9}</li>
              <li className={meal.strIngredient10 ? 'text-sm mr-2' : 'hidden'}>{meal.strMeasure10} {meal.strIngredient10}</li>
              <li className={meal.strIngredient11 ? 'text-sm mr-2' : 'hidden'}>{meal.strMeasure11} {meal.strIngredient11}</li>
              <li className={meal.strIngredient12 ? 'text-sm mr-2' : 'hidden'}>{meal.strMeasure12} {meal.strIngredient12}</li>
              <li className={meal.strIngredient13 ? 'text-sm mr-2' : 'hidden'}>{meal.strMeasure13} {meal.strIngredient13}</li>
              <li className={meal.strIngredient14 ? 'text-sm mr-2' : 'hidden'}>{meal.strMeasure14} {meal.strIngredient14}</li>
              <li className={meal.strIngredient15 ? 'text-sm mr-2' : 'hidden'}>{meal.strMeasure15} {meal.strIngredient15}</li>
              <li className={meal.strIngredient16 ? 'text-sm mr-2' : 'hidden'}>{meal.strMeasure16} {meal.strIngredient16}</li>
              <li className={meal.strIngredient17 ? 'text-sm mr-2' : 'hidden'}>{meal.strMeasure17} {meal.strIngredient17}</li>
              <li className={meal.strIngredient18 ? 'text-sm mr-2' : 'hidden'}>{meal.strMeasure18} {meal.strIngredient18}</li>
              <li className={meal.strIngredient19 ? 'text-sm mr-2' : 'hidden'}>{meal.strMeasure19} {meal.strIngredient19}</li>
              <li className={meal.strIngredient20 ? 'text-sm mr-2' : 'hidden'}>{meal.strMeasure20} {meal.strIngredient20}</li>
            </ul>
            </div>
            </div>
            <div className="flex flex-col justify-start items-start p-3">
              <h2 className="text-xl font-bold mt-3">Preparation instructions:</h2>
              <p>{meal.strInstructions}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default IndividualRecipePage
import Image from "next/image";
import Link from "next/link";

async function fetchRandomRecipe() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const randomRecipe = await response.json();
  return randomRecipe;
}

const Header = async () => {
  const randomRecipe = await fetchRandomRecipe();
  return (
    <header className="h-screen w-full bg-slate-50 flex justify-center items-center">
      {randomRecipe.meals.map((random) => (
        <div className="flex flex-col-reverse md:flex-row justify-between items-center p-3">
          <div className="flex flex-col justify-center items-center mx-5 flex-[0.3]">
            <h1 className=" text-center text-3xl underline my-3 font-bold text-green-900">
              Random recipe:
            </h1>
            <h1 className=" text-center text-2xl font-bold">
              {random.strMeal}
            </h1>
            
          </div>
          <Image
            src={random.strMealThumb}
            height={300}
            width={300}
            className="w-full object-cover  flex-[0.5] rounded-md drop-shadow-lg"
          />
        </div>
      ))}
    </header>
  );
};

export default Header;

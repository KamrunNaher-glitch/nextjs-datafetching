import MealSearchInput from "./components/MealSearchInput";
export default async function Mealspage({searchParams}) {
  const query = await searchParams;

  const fetchMeals = async () => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`);
      const data = await res.json();
    //   setMeals(data?.meals || []);
      return data.meals;
    } catch (error) {
      console.error('Error fetching meals:', error);
      return [];

    }
  };

  const meals = await fetchMeals();
  return (
    
    <div className='grid grid-cols-4 gap-4  '>
        <div className="flex justify-center">
            <MealSearchInput></MealSearchInput>
        </div>
        
    {
        meals?.map((singleMeal) =>{
            return (
               <div>
                <p className='text-2xl font-bold'>{singleMeal.strMeal}</p>
                <p>{singleMeal.strInstructions}</p>


                 </div> 
            )
        })
    }
    
    </div>
    
 
  
  );
}

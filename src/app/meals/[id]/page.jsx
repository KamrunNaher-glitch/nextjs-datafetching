


 const fetchSingleMeal = async (id) => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await res.json();
    //   setMeals(data?.meals || []);
      return data.meals;
    } catch (error) {
      console.error('Error fetching meals:', error);
      return [];

    }
  };


     export async function generateMetadata({ params,}) {
        // read route params
        const id = (await params).id;
  
   // fetch post information
    const [singleMeal] = await fetchSingleMeal(id);
    console.log(singleMeal)
  
    return {
      title: singleMeal.strMeal,
      description: singleMeal.strInstructions,
    }
  }



export default async function SingleMealPage({ params }) {
  const singleMeal = await fetchSingleMeal(params.id);

  return (
    <div>
      <p>{JSON.stringify(singleMeal)}</p>
    </div>
  );
}

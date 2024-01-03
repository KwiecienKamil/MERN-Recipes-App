import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

const SavedRecipes = () => {
  const [recipes, setRecipes] = useState<any[]>([]);

  const userID = useGetUserID();
  useEffect(() => {
    const saveRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/${userID}`
        );
        setRecipes(response.data.savedRecipes);
        
      } catch (err) {
        console.log(err);
      }
    };
    saveRecipe()
  }, [])

  return (
    <div className="homewrapper">
      <div className="homediv">
      {recipes?.map((recipe) => (
       <Card key={recipe._id} style={{ maxWidth: '375px'}}>
       <Card.Img variant="top" src={recipe.imageUrl} />
       <Card.Body>
         <div className="d-flex gap-1 align-items-center justify-content-between pb-4 px-2">
          <h1 className="display-2 fs-2" >{recipe.name}</h1>
          <h2 className="fs-4">{`${recipe.cookingTime}min`}</h2>
         </div>
          <ul>
          {recipe.ingredients.map((item:string) => (
            <li key={Math.floor(Math.random() * 999)}>{item}</li>
            ))}
          </ul>
            <div className="d-flex gap-1 align-items-center justify-content-center pb-4">
            {recipe.instructions}
            </div>
       </Card.Body>
     </Card>
    ))}
      </div>
    </div>
  );
};

export default SavedRecipes;

import axios from "axios"
import { FC, useEffect, useState } from "react"
import  Button  from "react-bootstrap/Button";
import  Card from "react-bootstrap/Card";
import { useGetUserID } from "../../hooks/useGetUserID";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

type HomeProps = {
  savedRecipes: string[]
}

const Home: FC<HomeProps> = ({savedRecipes}) => {
  const [recipes, setRecipes] = useState<any[]>([])
  const [addRecipe, setAddRecipe] = useState([])
  const [cookies,_] = useCookies(["access_token"])
  const userID = useGetUserID()
  

  useEffect(() => {
    const fetchRecipe = async () => {
      try{
       const response =  await axios.get("http://localhost:3001/recipes");
       setRecipes(response.data);
       } catch(err){
        console.log(err);
       }
    };
    fetchRecipe()
  },[]);

  const saveRecipe = async (recipeID:string) => {
   if (!userID) {
    toast("Login first")
   }else {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeID, userID
      }, {headers: {authorization: cookies.access_token}})
      setAddRecipe(response.data.savedRecipes)
    }catch(err) {
      console.log(err);
    }
    window.location.reload()
    toast("Recipe saved")
   }
  }

  const isRecipeSaved = (id:string) =>  savedRecipes?.includes(id)
  return (
    <div className="homewrapper">
      <div className="homediv">
      {recipes?.map((recipe) => (
         <Card key={recipe._id} style={{ maxWidth: '375px'}} className="background shadow-lg">
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
           <div className="d-flex align-items-center justify-content-end">
           <Button variant="success" onClick={() => saveRecipe(recipe._id)} disabled={isRecipeSaved(recipe._id)}>{isRecipeSaved(recipe._id) ? "Saved" : "Save"}</Button>
           </div>
         </Card.Body>
       </Card>
      ))}
    </div>
    </div>
  )
}

export default Home

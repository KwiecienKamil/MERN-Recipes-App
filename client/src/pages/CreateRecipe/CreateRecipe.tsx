import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useGetUserID } from "../../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";

type recipeType = {
  name: string;
  ingredients: Array<string>;
  instructions: string;
  imageUrl: string;
  cookingTime: number;
  userOwner: string | null;
};



const CreateRecipe = () => {
  const navigate = useNavigate()
  const userID = useGetUserID()
  const [recipe, setRecipe] = useState<recipeType>({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = event.target;
    const ingredients = recipe.ingredients
    ingredients[index] = value
    setRecipe({ ...recipe, ingredients});
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };
  
  
  const onSumbit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
     try{
      await axios.post("http://localhost:3001/recipes", recipe)
      alert("Recipe Created")
     } catch(err){
      console.log(err);
     }
     navigate("/")
  }
  
  
  return (
    <div className="createWrapper">
      <div className="h-100 w-100 d-flex align-items-center justify-content-center fs-4">
        <Form className="form bg-dark p-4 text-light rounded" onSubmit={onSumbit}>
          <h1 className="w-100 text-center fs-1 py-2 rounded">Create Recipe</h1>
          <Form.Group className="mb-1">
            <Form.Label htmlFor="name">
              Name
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="d-flex flex-column gap-2 mb-1">
            <Form.Label htmlFor="ingredients" className="mb-0">
              Ingredients
            </Form.Label>
            {recipe.ingredients.map((ingredient, index) => (
              <input
                key={index}
                name={ingredient}
                value={ingredient}
                type="text"
                onChange={(event) => handleIngredientChange(event, index)}
                className="form-control rounded px-2 py-1"
              />
            ))}
            <Button onClick={addIngredient} variant="secondary">Add Ingredient</Button>
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label htmlFor="instructions">
              Instructions
            </Form.Label>
            <Form.Control
              type="text"
              name="instructions"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label htmlFor="imageUrl" >
              Image Url
            </Form.Label>
            <Form.Control
              type="text"
              name="imageUrl"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="cookingTime">Cooking Time (minutes)</Form.Label>
            <Form.Control
              type="text"
              name="cookingTime"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="success" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateRecipe;

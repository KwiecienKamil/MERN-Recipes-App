import {Route, Routes} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import NavigationBar from "./components/NavigationBar/NavigationBar"
import Auth from "./pages/Auth"
import SavedRecipes from "./pages/SavedRecipes"
import { BrowserRouter } from "react-router-dom"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe"
import Home from "./pages/Home/Home"
import { useEffect, useState } from "react"
import { useGetUserID } from "./hooks/useGetUserID"
import axios from "axios"

function App() {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID()
  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSavedRecipes();
  }, []);
  return (
    <>
    <BrowserRouter>
     <NavigationBar />
     <Routes>
      <Route path="/" element={<Home savedRecipes={savedRecipes}/>} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/createrecipe" element={<CreateRecipe />} />
      <Route path="/savedRecipes" element={<SavedRecipes savedRecipes={savedRecipes}/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

import {Route, Routes} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import NavigationBar from "./components/NavigationBar/NavigationBar"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import CreateRecipe from "./pages/CreateRecipe"
import SavedRecipes from "./pages/SavedRecipes"
import { BrowserRouter } from "react-router-dom"


function App() {
  return (
    <>
    <BrowserRouter>
     <NavigationBar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/createrecipe" element={<CreateRecipe />} />
      <Route path="/savedRecipes" element={<SavedRecipes />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

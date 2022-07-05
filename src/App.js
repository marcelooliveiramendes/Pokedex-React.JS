import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import PokemonInfo from "./pages/PokemonInfo";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pokemon/:name" element={<PokemonInfo />}/>
      </Routes>
      <GlobalStyles/>
    </BrowserRouter>
  );
}

export default App;

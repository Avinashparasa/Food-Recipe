import Search from "./components/search";
import Mealitem from "./components/Mealitem";
import Navbar from "./components/Navbar";
import Alphabet from "./components/Alphabet";
import TypingText from "./components/Dynamic";
import Footer from "./components/Footer";
import { useState, useEffect, createContext } from "react";
const textList = ["Cuisines", "Dietary Delights", "Divine Desserts"];

export const Navbarcontext = createContext();

const App = () => {
  const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
  const [data, setData] = useState(null);
  const [isLoading,setIsloading] = useState(false)

 
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((dat) => {
        setIsloading(true)
        setData(dat.meals);
        
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [url]);
 

    
  
  return (
    <Navbarcontext.Provider value={{setUrl}}>
      <Navbar />
      <TypingText textList={textList} interval={4000} />
      <Search />
        { isLoading?<Mealitem data={data}  isLoading={isLoading}/>:<h2>Loading...</h2>}
      <Alphabet onClick={setUrl} />
      <Footer/>
    </Navbarcontext.Provider>
  );
};

export default App;

import { useContext, useState } from "react";
import { Navbarcontext } from "../app";


function Search() {
  const [search,setSearch]=useState('');
  const {setUrl} = useContext(Navbarcontext)
  
  function Keypress(e){
          if(e.key==="Enter" && search){
                setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                setSearch("");
              }
          }
  
  return (
    <>
   
      <div className="searcher">
        <h2>Search for your favourite food</h2> 
        <input  onChange={(e)=>setSearch(e.target.value)}  onKeyPress={Keypress} placeholder="search your fav" value={search} />
      </div>
    </>
  );
}
export default Search;

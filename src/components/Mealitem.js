import {useNavigate} from 'react-router-dom'

const Mealitem = ({ data,isLoading }) => {

  const navigate=useNavigate()
  return (
    <div className="horizontal">
      {!data
        ? "not found"
        : data.map((item) => (
            <div key={item.idMeal} className="items" onClick={()=>{
               navigate(`/${item.idMeal}`)
            }} >
              <img src={item.strMealThumb} alt="jrnvfk" />
              {item.strMeal.length>30?
              <h3>{item.strMeal.substring(0, 30) + "..."}</h3>:<h3>{item.strMeal}</h3>}
            </div>
          ))}
    </div>
  );
};
export default Mealitem;

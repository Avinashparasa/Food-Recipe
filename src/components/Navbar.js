import {Link} from 'react-router-dom'

const Navbar=()=>{
   
return(
<nav>
   <h2 className='link'>MyFoodRecipe </h2>
    <Link to='/byalphabet' className='link'>Search by Alphabet</Link>
</nav>
)
}
export default Navbar;

import { Link } from 'react-router-dom'
import "./sidebar.scss"
const Sidebar = () => {
   
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to='/phones'>Smartphones</Link>
            </li>
            <li>
                <Link to='/laptops'>Laptops</Link>
            </li>
            <li>
                <Link to='fragrances'>Fragrances</Link>
            </li>
            <li>
                <Link to='skincare'>Skincare</Link>
            </li>
            <li>
                <Link to='groceries'>Groceries</Link>
            </li>
            <li>
                <Link to='HomeDecoration'>Home Decoration</Link>
            </li>
            <li>
                <Link to='furniture'>Furniture</Link>
            </li>
            <li>
                <Link to='tops'>Tops</Link>
            </li>
            <li>
                <Link to='womens-dresses'>Womens Dresses</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Sidebar

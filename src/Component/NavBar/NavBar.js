import { IoFastFoodOutline } from 'react-icons/io5';
import { RiPercentFill } from 'react-icons/ri';
import style from './NavBar.module.css'
import { TbPokeball } from 'react-icons/tb';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiSearch, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function NavBar() {
 
   
    return(
        <>
        <div className={style.main}>
        <Link  className={style.link} to="/" >
        <div className={style.subMain}>
        <IoFastFoodOutline className={style.icon}/>
        <h1>Hungry</h1>
        </div>
        </Link>

        <div className={style.mainSecond}>
        <div >
        <Link className={style.input}  to="/search">
        <FiSearch className={style.iconSearch} />
        <h3  className={style.inputBox} placeholder="">Search</h3>
        </Link>
        </div>
       
          
          

        <div  className={style.subMain}>
        <RiPercentFill className={style.iconTwo}  />
        <h3>Offers</h3>
        </div>

        <div  className={style.subMain}>
        <TbPokeball className={style.iconTwo}  />
        <h3><Link  className={style.input} to='/help'>Help</Link></h3>
        </div>

        <div  className={style.subMain}>
        <FiUser className={style.iconTwo} />
        <h3>Sign In</h3>
        </div>

        <div  className={style.subMain}>
        <AiOutlineShoppingCart className={style.iconTwo}  />
        <h3>Cart</h3>
        </div>

        </div>
        </div>
        </>
    )
}
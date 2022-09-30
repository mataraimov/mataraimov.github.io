import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { useDispatch } from 'react-redux';
import { setgender } from '../../redux/slices/filterSlice';
const Sidebar = ({ value, onChangeCategory }) => {
  const [first, setfirst] = React.useState(true);
  const womenCategories = ['All', 'Coats', 'Blazers', 'Shirts', 'Shoes', 'Hats', 'Dress'];
  const menCategories = ['All', 'Coats', 'Blazers', 'Shirts', 'Shoes', 'Hats', 'Bags'];
  const dispatch = useDispatch();
  const chandeGenderToWomen = (i) => {
    dispatch(setgender(i));
    setfirst(true);
  };
  const chandeGenderToMen = (i) => {
    dispatch(setgender(i));
    setfirst(false);
  };
  return (
    // Pass on our props
    <Menu>
      <div className="sidebarUl">
        <Link to="/">
          <img className="sidebarImage" src={logo} alt="" />
        </Link>
        <div>
          <button
            className={`${!first ? 'categoryList' : 'active'}`}
            onClick={() => chandeGenderToWomen(0)}
          >
            women
          </button>
          <button
            className={`${!!first ? 'categoryList' : 'active'}`}
            onClick={() => chandeGenderToMen(1)}
          >
            man
          </button>
        </div>
        <ul>
          {first
            ? womenCategories.map((el, indx) => (
                <Link to="/items">
                  <li
                    key={indx}
                    onClick={() => onChangeCategory(`w${indx}`)}
                    className={value === indx ? 'active' : 'categoryList'}
                  >
                    {el}
                  </li>
                </Link>
              ))
            : menCategories.map((el, indx) => (
                <Link to="/items">
                  <li
                    key={indx}
                    onClick={() => onChangeCategory(`mens${indx}`)}
                    className={value === indx ? 'active' : 'categoryList'}
                  >
                    {el}
                  </li>
                </Link>
              ))}
        </ul>
      </div>
    </Menu>
  );
};
export default Sidebar;
{
  /* <Link to="/">Home</Link>
      <a className="menu-item" href="/about">
        About
      </a>

      <a className="menu-item" href="/services">
        Services
      </a>

      <a className="menu-item" href="/contact">
        Contact us
      </a> */
}
// function Categories({ value, onChangeCategory }) {
//   const AllCategories = ['All', 'Coats', 'Blazers', 'Shirts', 'Shoes', 'Hats', 'Dress'];
//   return (
//     <div className="categories">
//       <ul>
//         {AllCategories.map((el, indx) => (
//           <li
//             key={indx}
//             onClick={() => onChangeCategory(indx)}
//             className={value === indx ? 'active' : ''}
//           >
//             {el}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

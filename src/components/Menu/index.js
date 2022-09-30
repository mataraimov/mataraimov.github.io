import { React, ReactDOM } from 'react';
// import ReactDOM from "react-dom";
import { useDispatch } from 'react-redux';
import './styles.css';
import SideBar from './sidebar';
import { setcategoryId } from '../../redux/slices/filterSlice';
import { useSelector } from 'react-redux';
const Menu = () => {
  const dispatch = useDispatch();
  const onChangeCategory = (id) => {
    dispatch(setcategoryId(id));
  };
  const categoryId = useSelector((state) => state.filter.categoryId);
  return (
    <div id="App">
      <SideBar value={categoryId} onChangeCategory={onChangeCategory} />

      {/* <div id="page-wrap">
        <h1>Click to show menu</h1>
      </div> */}
    </div>
  );
};
export default Menu;

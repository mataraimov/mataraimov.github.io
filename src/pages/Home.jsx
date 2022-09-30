import React from 'react';
import qs from 'qs';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Pizza from '../components/Zara';
import Skeleton from '../components/Zara/Skeleton';
import { setcategoryId } from '../redux/slices/filterSlice';
import { searchContext } from '../App';
const Home = () => {
  const [items, setitems] = React.useState([]);
  const [isloading, setisloading] = React.useState(true);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const sortColor = useSelector((state) => state.filter.sort.sortProperty);
  const gender = useSelector((state) => state.filter.gender);
  const { searchValue } = React.useContext(searchContext);
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChangeCategory = (id) => {
    dispatch(setcategoryId(id));
  };
  // console.log(categoryId);
  // console.log(categoryId);
  React.useEffect(() => {
    setisloading(true);
    axios
      .get(
        `https://632a97241090510116c36b4f.mockapi.io/items?${
          !categoryId.includes(0) ? `type=${categoryId}` : ''
        }&sortBy=${sortType.replace('-', '')}&order=${
          sortType.includes('-') ? 'desc' : 'asc'
        }&gender=${gender}`,
      )
      .then((resp) => {
        setitems(resp.data);
        setisloading(false);
      });
  }, [categoryId, sortType]);
  // React.useEffect(() => {
  //   const queryString = qs.stringify({
  //     sortProperty: sortType,
  //     categoryId,
  //   });
  //   navigate(`?${queryString}`);
  // }, [categoryId, sortType]);
  return (
    <>
      {/* <Categories value={categoryId} onChangeCategory={onChangeCategory} /> */}
      <Sort />
      <div className="content__items">
        {isloading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((el, i) => <Pizza key={i} {...el} />)}
      </div>
    </>
  );
};
export default Home;

import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import Sort from '../components/Sort';
import Pizza from '../components/Zara';
import Skeleton from '../components/Zara/Skeleton';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const sortType = useSelector((state) => state.filter.sort.sortProperty) || 'name';

  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://632a97241090510116c36b4f.mockapi.io/phones?&sortBy=${sortType.replace(
          '-',
          '',
        )}&order=${sortType.includes('-') ? 'desc' : 'asc'}`,
      )
      .then((resp) => {
        setItems(resp.data);
        setIsLoading(false);
      });
  }, [categoryId, sortType]);

  return (
    <>
      {/* <Categories value={categoryId} onChangeCategory={onChangeCategory} /> */}
      <Sort />
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((el, i) => <Pizza key={i} {...el} />)}
      </div>
    </>
  );
};

export default Home;

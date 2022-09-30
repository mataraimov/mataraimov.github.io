import React from 'react';
import Skeleton from '../components/Zara/Skeleton';
import Zara from '../components/Zara';
import axios from 'axios';
import { searchContext } from '../App';
import Search from './../components/Search';
const Search__block = () => {
  const { searchValue } = React.useContext(searchContext);
  React.useEffect(() => {
    setisloading(true);
    axios
      .get(`https://632a97241090510116c36b4f.mockapi.io/items?&search=${searchValue}`)
      .then((resp) => {
        setitems(resp.data);
        setisloading(false);
      });
  }, [searchValue]);
  const [isloading, setisloading] = React.useState(true);
  const [items, setitems] = React.useState([]);
  return (
    <div>
      <Search />

      {searchValue && (
        <div className="content__items">
          {isloading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((el, i) => <Zara key={i} {...el} />)}
        </div>
      )}
    </div>
  );
};
export default Search__block;

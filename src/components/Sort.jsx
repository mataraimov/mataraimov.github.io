import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setsort } from '../redux/slices/filterSlice';

const sorts = [
  // { name: 'популярности(DESC)', sortProperty: '-rating' },
  // { name: 'популярности', sortProperty: 'rating' },
  { name: 'by price ( DESCending )', sortProperty: '-price' },
  { name: 'by pricе', sortProperty: 'price' },
  { name: 'by name ( DESCending )', sortProperty: '-name' },
  { name: 'by name', sortProperty: 'name' },
];
function Sort() {
  const sort = useSelector((state) => state.filter.sort);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const sortRef = useRef();

  const onClickListItem = (obj) => {
    dispatch(setsort(obj));
    setOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div ref={sortRef} className="sort">
      <div onClick={() => setOpen(!open)} className="sort__label">
        <b>Filter by</b>
        <span>{sort.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sorts.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Sort;

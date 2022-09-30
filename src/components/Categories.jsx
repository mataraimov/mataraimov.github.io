import React from 'react';
function Categories({ value, onChangeCategory }) {
  const AllCategories = ['All', 'Coats', 'Blazers', 'Shirts', 'Shoes', 'Hats', 'Dress'];
  return (
    <div className="categories">
      <ul>
        {AllCategories.map((el, indx) => (
          <li
            key={indx}
            onClick={() => onChangeCategory(indx)}
            className={value === indx ? 'active' : ''}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: {
    name: 'TechTrek X',
    price: 1099,
    imgUrl: [
      'https://login.kg/image/cache/catalog/new/Phones/Apple/IPhone%2013/Pro/1-500x400.jpg',
      'https://yellow.ua/media/catalog/product/cache/8/image/600x600/9df78eab33525d08d6e5fb8d27136e95/2/2/221234858.jpg',
    ],
    color: ['graphite', 'sierra blue', 'silver', 'gold', 'alpine green'],
    size: ['128GB', '256GB', '512GB', '1TB'],
    description:
      'The TechTrek X is a revolutionary smartphone packed with cutting-edge features. Its sleek design houses a powerful processor and stunning display, providing a seamless user experience. With a versatile camera system, you can capture every moment in exceptional detail. The TechTrek X offers advanced security features and long-lasting battery life, making it the perfect companion for your busy lifestyle. Choose from a range of stylish colors and storage options to suit your preferences.',
  },
};

export const infoSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const { setItem } = infoSlice.actions;

export default infoSlice.reducer;

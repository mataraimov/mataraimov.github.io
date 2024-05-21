import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: {
    name: 'iPhone 13 Pro Max',
    price: 1099,
    imgUrl: [
      'https://login.kg/image/cache/catalog/new/Phones/Apple/IPhone%2013/Pro/1-500x400.jpg',
      'https://yellow.ua/media/catalog/product/cache/8/image/600x600/9df78eab33525d08d6e5fb8d27136e95/2/2/221234858.jpg',
    ],
    color: ['graphite', 'sierra blue', 'silver', 'gold', 'alpine green'],
    size: ['128GB', '256GB', '512GB', '1TB'],
    description:
      "The iPhone 13 Pro Max is the pinnacle of Apple's smartphone technology. It boasts a stunning Super Retina XDR display with a 120Hz refresh rate for incredibly smooth visuals. The powerful A15 Bionic chip delivers unparalleled performance for demanding tasks and immersive gaming. Capture breathtaking photos and cinematic-quality videos with the advanced triple-lens camera system, featuring a larger main sensor and improved low-light capabilities. The iPhone 13 Pro Max also offers long-lasting battery life and a durable design, making it the perfect choice for power users and mobile photography enthusiasts.",
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

import { combineReducers } from 'redux';
import axios from 'axios';
const initialUserState = {
  _id: "",
  email: '',
  getUpdates: false,
  country: 'India',
  firstName: '',
  lastName: '',
  address: '',
  address2: '',
  city: '',
  state: '',
  pinCode: '',
  phone: '',
  shippingMethod: '',
  paymentMethod: 'creditCard',
};
const initialState = [];
let data = [];
let temp = [];


const fetchCart = async (id) => {
  console.log("fetch called", id);

  try {
    const response =
      await axios.get(`https://kapde-lelo-server.onrender.com/cart/${id}`);
    data = response.data;
    console.log("cart reducer", data)

  } catch (err) {
    console.log(err.message);
    data = [];

  }

};


const update = async (id, data) => {
  try {

    await axios.put(`https://kapde-lelo-server.onrender.com/cartup/${id}`, data);

  } catch (err) {
    console.log(err.message);
  }

};
const remove = async (id) => {
  console.log("removeIP", id)
  try {

    await axios.delete(`https://kapde-lelo-server.onrender.com/cartdel/${id}`);

  } catch (err) {
    console.log(err.message);
  }

};


const cartReducer = (state = initialState, action) => {
  const newState = [...state];
  let existingProduct, index, id;

  switch (action.type) {
    case 'addtocart':
      console.log("current cart", state);
      id = action.payload.id;
      existingProduct = newState.find((item) => item.id === id);

      if (existingProduct) {
        existingProduct.quantity++;
        if (action.payload.user != 0)
          update(existingProduct._id, existingProduct);
        return [...newState];
      }

      return [...newState];

    case 'addItemnew':
      if (initialUserState._id != "")
        return [...newState, action.payload]
      else
        return [...newState, action.payload]


    case 'removefromcart':

      index = newState.findIndex(item => item.id === action.payload.id);
      if (newState[index].quantity === 1) {
        if (action.payload.user != 0)
          remove(newState[index]._id);
        newState.splice(index, 1);
      } else {
        newState[index].quantity--;
        if (action.payload.user != 0)
          update(newState[index]._id, newState[index]);
      }
      return newState;
    case 'buyNowcart':
      console.log("buy now reducer", action.payload)
      index = newState.findIndex(item => item.id === action.payload);
          remove(newState[index]._id);
        newState.splice(index, 1);
      
      return newState;
    case 'clearCart':
      console.log("clearCart called")

      newState.map(async (item) => {
        console.log("cleared", item._id)

        await remove(item._id);
      })

      return [];
    case 'setCart':
      fetchCart(action.payload);
      return [...data];
    default:
      return state;
  }

};


const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'setUser':
      console.log("setUser", action.payload)
      return {

        ...action.payload,
      };
    case 'clearUser':
      console.log("clearUser")
      return {

        ...initialUserState,
      };

    default:
      return state;
  }
};


const reducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default reducer;

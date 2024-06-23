import axios from "axios";
import store from './Store';

const addtocart = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'addtocart',
      payload: data
    });
  };
};

const updateCart = (data) => {
return (dispatch) => {
  dispatch({
    type: 'updateCart',
    payload: data
  });
};
};

const removefromcart = (data) => {
  console.log("remove",data);
  return (dispatch) => {
    dispatch({
      type: 'removefromcart',
      payload: data,
    });
  };
};
const clearCart=()=>{
  return(dispatch)=>{
    dispatch({
      type: 'clearcart'
    });
  }
}
const setCart = (id) => {

  return (dispatch) => {
    dispatch({
      type: 'setCart',
      payload:id
    });
  };
};




const setUser = (userInfo) => {
  return (dispatch) => {
    dispatch({
      type: 'setUser',
      payload: userInfo,
    });
  };
};





const addItem=(id,user=0)=>{

  return async(dispatch)=>{
    const newItem = [{ quantity: 1, id: id, user: user }];
      console.log("item",newItem)
  try{
    if(user!=0){

      const response= await axios.post(`http://localhost:5555/cartnew`,newItem[0]);
      console.log("response",response.data)
      dispatch({
        type: 'addItemnew',
        payload: response.data,
      });
    }
    else{
      dispatch({
        type: 'addItemnew',
        payload: newItem,
      });
    }
    
    
  }catch(err) {
      console.error(err.message);
  }
  
  }

}
const getUser=()=>{

 return async(dispatch)=>{
    const user = [{ email:'me@dfh',pass:'asdf' }];
    console.log(user[0])
  try{
    console.log("called")

    const response= await axios.get(`http://localhost:5555/getuser/${user[0].email}/${user[0].pass}`,user[0]);
    console.log("response",response.data)
    dispatch({
      type: 'setUser',
      payload: response.data,
    });
  }catch(err) {
      console.error(err.message);
  }
  
  }
}


export { addtocart, updateCart, removefromcart,clearCart,setUser,setCart,addItem,getUser };
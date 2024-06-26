import axios from "axios";

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
  console.log("remove", data);
  return (dispatch) => {
    dispatch({
      type: 'removefromcart',
      payload: data,
    });
  };
};

const clearCart = () => {
  return (dispatch) => {
    dispatch({
      type: 'clearcart'
    });
  }
}
const setCart = (id) => {
  

  return (dispatch) => {
    dispatch({
      type: 'setCart',
      payload: id
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


const clearUser = () => {
  return (dispatch) => {
    dispatch({
      type: 'clearUser',
    });
  };
};



const addItem = (id, user = 0) => {

  return async (dispatch) => {
    const newItem = [{ quantity: 1, id: id, user: user }];
    console.log("item", newItem)
    try {
      if (user != 0) {

        const response = await axios.post(`http://localhost:5555/cartnew`, newItem[0]);
        console.log("response", response.data)
        dispatch({
          type: 'addItemnew',
          payload: response.data,
        });
      }
      else {
        dispatch({
          type: 'addItemnew',
          payload: newItem[0],
        });
      }


    } catch (err) {
      console.error(err.message);
    }

  }

}
const getUser = (user) => {

  return async (dispatch) => {

    console.log("action user", user)
    try {
      console.log("called");
      const response = await axios.get(`http://localhost:5555/getuser/${user.email}/${user.pass}`, user);
      console.log("response", response.data[0]);
      dispatch({
        type: 'setUser',
        payload: response.data[0],
      });
    } catch (err) {
      console.error(err.message);
    }

  }
}
const updateUser = (id,data) => {
  return async (dispatch) => {

    console.log("action userdata", data)
    try {
      console.log("called update user");
      const response = await axios.put(`http://localhost:5555/${id}`, data);
      console.log("response", response.data);
      dispatch({
        type: 'setUser',
        payload: response.data,
      });
    } catch (err) {
      console.error(err.message);
    }

  }
}

const newUser = (user) => {

  return async (dispatch) => {
    console.log("new user", user)
    try {
      if (user != 0) {

        const response = await axios.post(`http://localhost:5555/user`, user);
        console.log("response", response.data)
        dispatch({
          type: 'setUser',
          payload: response.data,
        });
      }


    } catch (err) {
      console.error(err.message);
    }

  }

}

const newOrder = (order) => {

  return async (dispatch) => {
    console.log("new user", order)
    try {
        const response = await axios.post(`http://localhost:5555/order`, order);
        console.log("response of new order", response.data)
        dispatch({
          type: 'clearCart',
        });
    } catch (err) {
      console.error(err.message);
    }
  }
}
const buyNowcart = (id,order) => {
  return async (dispatch) => {
    try {
        const response = await axios.post(`http://localhost:5555/order`, order);
        console.log("response of new order", response.data)
        dispatch({
          type: 'buyNowcart',
          payload: id,
        });
    } catch (err) {
      console.error(err.message);
    }
  }
};


export { addtocart, updateCart, removefromcart, clearCart, setUser, setCart, addItem, getUser,updateUser,clearUser,newUser,newOrder,buyNowcart};
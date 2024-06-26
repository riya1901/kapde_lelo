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
    try {
      if (user != 0) {

        const response = await axios.post(`https://kapde-lelo-server.onrender.com/cartnew`, newItem[0]);
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

    try {
      const response = await axios.get(`https://kapde-lelo-server.onrender.com/getuser/${user.email}/${user.pass}`, user);
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

    try {
      const response = await axios.put(`https://kapde-lelo-server.onrender.com/${id}`, data);
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
    try {
      if (user != 0) {

        const response = await axios.post(`https://kapde-lelo-server.onrender.com/user`, user);
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
    try {
         await axios.post(`https://kapde-lelo-server.onrender.com/order`, order);
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
        const response = await axios.post(`https://kapde-lelo-server.onrender.com/order`, order);
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
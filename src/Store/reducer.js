const initialState = [];

const reducer = (state = initialState, action) => {
  const newState = [...state];
  let existingProduct,newItem,index,id;

  switch (action.type) {

    case 'addtocart':
      id=action.payload.id;
       existingProduct = newState.find((item) => {
        if (item.product.id == action.payload.id) {
          item.quantity ++;
        }
        return (item.product.id == action.payload.id)
      });
      console.log(id);

      if(existingProduct) return ([...newState]);

       newItem = {quantity: 1, product:{
        id:id}
       };
      console.log([...newState, newItem],'addtoCart')
      return [...newState, newItem];
    case 'updateCart':
      newState.forEach((item) => {
        if (item.product.id == action.payload.productId) {
          if (action.payload.type === 'increase') {
            item.quantity += 1;
          } else {
            if (item.quantity > 1) {
              item.quantity -= 1;
            }
          }
        }
      });
      return ([...newState]);
    case 'removefromcart':
      console.log(index,'remove')
       index = newState.findIndex(item => item.product.id == action.payload);
       if(newState[index].quantity==1){
         newState.splice(index, 1);
       }
       else{
        newState[index].quantity--;
       }
      return newState;
      case 'clearcart':
       return [];
    default:
      return state;
  }
  
};

export default reducer;

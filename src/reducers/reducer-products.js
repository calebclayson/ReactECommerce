export default function (state={categories:[''],products:[],cart:[]}, action) {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        categories: [
          ...state.categories
        ],
        products: [
          ...state.products,
          ...action.products
        ],
        cart:[
          ...state.cart
        ]
      }
    case "ADD_TO_CART":
      return {
        categories: [
          ...state.categories
        ],
        products: [
          ...state.products
        ],
        cart: [
          ...state.cart,
          action.cart
        ]
      }
    case "UPDATE_CART":
      let newCart = [...state.cart];
      for(let i = 0; i < newCart.length; i++) {
        if(Number(action.cart.id) === Number(newCart[i].id)) {
          newCart[i].quantity = action.cart.quantity;
        }
      }
      return {
        categories: [
          ...state.categories
        ],
        products: [
          ...state.products
        ],
        cart: newCart
      }
    case "DELETE_CART_ITEM":
      let newCart2 = [...state.cart];
      for(let i = 0; i < newCart2.length; i++) {
        if(Number(action.id) === Number(newCart2[i].id)) {
          newCart2.splice(i, 1);
        }
      }
      return {
        categories: [
          ...state.categories
        ],
        products: [
          ...state.products
        ],
        cart: newCart2
      }
    case "ADD_CATEGORIES":
      return {
        categories: [
          ...state.categories,
          ...action.categories
        ],
        products: [
          ...state.products
        ],
        cart: [
          ...state.cart
        ]
      }
    default:
      return state
  }
}
const cartReducer = (state = [], action) => {
    var newState = [...state];
    switch (action.type) {
        case "ADD_TO_CART":
            return[
                ...state,
                {
                    id: action.id,
                    info: action.info,
                    quantity: 1
                }
            ];
        case "UPDATE_QUANTITY":
            const itemUpdate = newState.find(item => action.id===item.id);
            itemUpdate.quantity = itemUpdate.quantity + action.quantity;
            console.log(itemUpdate);
            return newState;
        case "DELETE_ITEM":
            newState = newState.filter(item => action.id !== item.id);
            return newState;
        case "DELETE_ALL":
            return [];
        default:
            return state;
    }
}
export default cartReducer;
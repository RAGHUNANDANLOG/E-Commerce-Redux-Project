const INIT_STATE = {
    carts: []
};

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            // If the item exists in the cart, update its quantity
            if (IteamIndex >= 0) {
                const updatedCarts = [...state.carts];
                updatedCarts[IteamIndex].qnty += 1;

                return {
                    ...state,
                    carts: updatedCarts
                };
            } else {
                // If the item doesn't exist, add it to the cart with quantity 1
                const temp = { ...action.payload, qnty: 1 };
                return {
                    ...state,
                    carts: [...state.carts, temp]
                };
            }

        case "RMV_CART":
            // Remove the item from the cart
            const data = state.carts.filter((el) => el.id !== action.payload);

            return {
                ...state,
                carts: data
            };

        case "RMV_ONE":
            const IteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if (IteamIndex_dec >= 0) {
                const updatedCarts = [...state.carts];

                // Decrease quantity of the item or remove it if quantity is 1
                if (updatedCarts[IteamIndex_dec].qnty > 1) {
                    updatedCarts[IteamIndex_dec].qnty -= 1;
                } else {
                    updatedCarts.splice(IteamIndex_dec, 1); // Remove the item if quantity is 1
                }

                return {
                    ...state,
                    carts: updatedCarts
                };
            }
            return state;

        default:
            return state;
    }
};

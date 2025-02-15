import {createStore} from 'redux'

const initialState = {
    user:{
        username : 'Sudharshan Nayak',
        balance : 25000
    }
};

export const  UpdateWallet = (amt) => ({
    type: 'UPDATE_WALLET',
    payload: amt
});

function reducer(state = initialState, action) {
    switch(action.type){
        case 'UPDATE_WALLET':
            return{
                user:{
                    username: state.user.username,
                    wallet: state.user.balance - action.payload
                }
            };
        default:
            return state

    }
}

const store = createStore(reducer);
export default store
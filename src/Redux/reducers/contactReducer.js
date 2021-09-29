const initialState=[
    {
        id:0,
        name:"Md Asifuzzaman Suvo",
        number:12345678,
        email:'shuvo@gmail.com'

    },

    {
        id:1,
        name:"test name",
        number:1234143,
        email:'test@gmail.com'
    },
];

const contactReducer=(state=initialState,action) => {
    switch(action.type) {
    case "ADD_CONTACT":
        state=[...state,action.payload];
        return state;

        default:
            return state;
    }
};

export default contactReducer;
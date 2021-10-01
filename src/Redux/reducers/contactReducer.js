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
        
        case "UPDATE_CONTACT":
            const updateState= state.map(contact => contact.id === action.payload.id ? action.payload:contact)
            state=updateState
            return state;

            case "DELETE_CONTACT":
                const filterContact= state.filter(contact => contact.id !== action.payload ? contact:null)
                state=filterContact
                return state;

        default:
            return state;
    }
};

export default contactReducer;
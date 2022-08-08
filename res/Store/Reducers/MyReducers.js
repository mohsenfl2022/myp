 
const initState = {
    MyData:[]
  }
const MyReducers = (state = initState, action) => {

    switch (action.type) {
        case 'setData': {

             state.MyData = action.payload;             
            return {
                ...state,
                MyData:state.MyData
            };
        }
       

        default:       
       return state;

    }
    return state;
}

export default MyReducers;



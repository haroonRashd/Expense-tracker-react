

const transactionReducer = ((state, action)=>{
    switch(action.type){
        case 'ADD_TRANSACTION':{
            return [action.payload, ...state];
        }
        case 'DELETE_TRANSACTION':{
           
            let newState = [];
            for (var x=0;x<state.length;x++){
                if(x!==action.payload.id)
                 newState.push(state[x]);
               
            }
     
            return newState;
            
        }
          
        default:{
            return state;
        }
    }
})
export default transactionReducer;
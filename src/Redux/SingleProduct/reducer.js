import { SINGLE_GET_FAILURE, SINGLE_GET_REQUEST, SINGLE_GET_SUCCESS } from "./actionType"

const initState = {
    isLoading:false,
    isError:false,
    data:{}
}
export const singleProductReducer = (state=initState,{type,payload})=>{
    switch(type){
        case SINGLE_GET_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        case SINGLE_GET_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:false,
                data:payload
            }  
        case SINGLE_GET_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true
            }      
        default:
            return state    
    }
}
import { GetData, Setdata } from "../../Components/Utils/localStorage"
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes"

const initState = {
    isAuth: GetData("Auth") || false,
   
    
}
export const AuthReducer = (state=initState,{type,payload}) =>{
    switch (type){
       
        case LOGIN_SUCCESS:
            Setdata("Auth",true)
            return {
               
                isAuth:true
            }
        case LOGIN_FAILURE:
            return{
             
                isAuth:false
            }
        default:
            return state
    }
}
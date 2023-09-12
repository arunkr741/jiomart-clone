import axios from "axios"
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes"


 const LoginSuccess = () =>{
    return {
        type: LOGIN_SUCCESS
    }
}
 const LoginFailure = () =>{
    return {
        type: LOGIN_FAILURE
    }
}

export const Login = ({email,password}) =>(dispatch)=>{

    axios.post("https://reqres.in/api/login",{
        email,
        password
    })
    .then(res=>{
        if(res.status==200){
            dispatch(LoginSuccess())
        }
       
        
    })
    .catch(err=>{
        alert("wrong user credentials")
        dispatch(LoginFailure())
    })
}
import axios from "axios"
import { SINGLE_GET_FAILURE, SINGLE_GET_REQUEST, SINGLE_GET_SUCCESS } from "./actionType"


const singleGetRequest = () => {
  return {
    type: SINGLE_GET_REQUEST
  }
}
const singleGetSuccess = (payload) => {
  return {
    type: SINGLE_GET_SUCCESS,
    payload
  }
}
const singleGetFailure = (payload) => {
  return {
    type: SINGLE_GET_FAILURE,
    payload
  }
}

export const singleProduct = (id) => (dispatch) => {
  dispatch(singleGetRequest())
  axios.get(`https://hungry-polo-shirt-lion.cyclic.app/products?id=${id}`)
    .then((res) => {
      dispatch(singleGetSuccess(res.data[0]))
    })
    .catch((err) => {
      dispatch(singleGetFailure(err))
    })
}
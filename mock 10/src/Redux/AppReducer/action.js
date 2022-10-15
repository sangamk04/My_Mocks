import * as types from "./actionTypes"
import axios from "axios"

export const getProducts=(params)=>(dispacth)=>{
   
    dispacth({type:types.GET_PRODUCT_REQUEST})
    return axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${params}&limit=12`).then((r)=>{
       console.log(r.data)
        return dispacth({type:types.GET_PRODUCT_SUCCESS,payload:r.data})
    }).catch((err)=>dispacth({type:types.GET_PRODUCT_ERROR}))
    }


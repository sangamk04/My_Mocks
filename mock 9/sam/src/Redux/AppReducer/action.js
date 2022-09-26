import * as types from "./actionTypes"
import axios from "axios"

export const getResturant=(params)=>(dispacth)=>{
   
    dispacth({type:types.GET_RESTURANT_REQUEST})
    return axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${params}&limit=20`).then((r)=>{
       console.log(r.data)
        return dispacth({type:types.GET_RESTURANT_SUCCESS,payload:r.data})
    }).catch((err)=>dispacth({type:types.GET_RESTURANT_ERROR}))
    }

    export const updatemusic=(id,payload)=>dispacth=>{
   dispacth({type:types.UPDATE_ALBUMS_REQUEST})
   return axios.patch(` http://localhost:8080/albums/${id}`,payload).then((r)=>{
    return dispacth({type:types.UPDATE_ALBUMS_SUCCESS})
   }).catch((err)=>dispacth({type:types.UPDATE_ALBUMS_ERROR}))
    }


import {request} from "network/request.js"

export function getHomeMutidata(){
  return request({url:"/home/multidata"})
}

export function getGoodsList(type, page){
  return request({
    url:"/home/data",
    params:{
      type,
      page
    }
  })
}
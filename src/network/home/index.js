import {request} from "network/request.js"

export function getHomeMutidata(){
  return request({url:"/home/multidata"})
}
import { Middleware } from "@reduxjs/toolkit";

const socketMiddleware: Middleware = store => next => action => {
  console.log("Socket middleware!")
  try{
    return next(action);
  }
  catch (error){
    console.log('Caught an exception', error);
    throw error;
  }
}

export default socketMiddleware;  
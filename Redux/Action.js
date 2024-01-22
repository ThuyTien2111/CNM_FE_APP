import { createAction } from '@reduxjs/toolkit';

export const setUser=createAction('SET_USER')
export const setUserList=createAction('SET_USER_LIST')
export const setMess=createAction('SET_MESS')
export const setMessRead=createAction('SET_MESS_READ')
export const setBestFriend=createAction('SET_BESTFRIEND')
export const addNewBestFriend=createAction('ADD_NEW_BESTFRIEND')
export const setRequestEarn=createAction('SET_REQUEST_EARN')
export const setRequestSend=createAction('SET_REQUEST_SEND')
export const addFriend=createAction('ADD_FRIEND')
export const removeRequest=createAction('REMOVE_REQUEST')
export const addRequest=createAction('ADD_REQUEST')


export const setSearchItem=createAction('SET_SEARCH_ITEM')
export const setSearchUser=createAction('SET_SEARCH_USER')
export const addSearchItem=createAction('ADD_SEARCH_ITEM')
export const addSearchUser=createAction('ADD_SEARCH_USER')

export const setShowUser=createAction('SET_SHOW_USER')









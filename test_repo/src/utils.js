const ANONYMOUS_ID_KEY = 'ANONYMOUS_ID_KEY';
const USER_ID_KEY = 'USER_ID_KEY';

export const persistAnonymousID = (id)=>{
    localStorage.setItem(ANONYMOUS_ID_KEY,id)
}

export const getAnonymousId = (id)=>{
    return localStorage.getItem(ANONYMOUS_ID_KEY,id)
}

export const persistUserID = (id)=>{
    localStorage.setItem(USER_ID_KEY,id)
}

export const getUserId = (id)=>{
    return localStorage.getItem(USER_ID_KEY,id)
}
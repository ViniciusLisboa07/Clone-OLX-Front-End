import  Cookies  from 'js-cookie';

export const isLogged = () => {
    let token = Cookies.get('token');
    if(token !== undefined){
        token = true
    } else {
        token = false
    }
    
    return token
}

export const doLogin = (token, rememberPassword = false) => {
    if(rememberPassword){
        Cookies.set('token', token, { expires:999 })
    } else {
        Cookies.set('token', token)
    }
}

export const doLogOut = () => {
    Cookies.remove('token');
}
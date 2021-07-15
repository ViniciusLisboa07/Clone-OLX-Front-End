import Cookies from "js-cookie";
import qs from 'qs';

const BASEAPI = 'http://localhost:5000';


const apiFetchPost = async(endpoint, body) => {
    if(!body.token){
        let token = Cookies.get('token');
        if(token) {
            body.token = token;
        }
    }
    
    const res = await fetch(BASEAPI+endpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify(body)
    });

    const json = await res.json(body);

    if(json.notallowed){
        window.location.href = "/";
        return;
    }

    return json;

};

const apiFetchGet = async (endpoint, body = []) => {
    if(!body.token){
        let token = Cookies.get('token');
        if(token) {
            body.token = token;
        }
    }
    
    const res  = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    const json = await res.json();

    if(json.notallowed){
        window.location.href = "/singin";
        return;
    }

    return json;
};

const OLXApi = {
    login: async(email, password) =>{
        
        const json = await apiFetchPost(
            '/users',
            {email, password}
        )
        return json;
    },

    register:async (name, email, password, stateLoc) => {
        const json = await apiFetchPost(
            '/users/',
            {name, email, password, state: stateLoc}
        )
        return json;
    },

    getStates: async () => {
        const json = await apiFetchGet(
            '/states'
        );

        return json;
    }

}

export default () => OLXApi;
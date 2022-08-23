import {Cookies} from 'react-cookie'

const cookies = new Cookies()

export const setCookie = (name,value,expires)=>{
	return cookies.set(name, value, 
		{
			path:'/',
			expires: expires,
		}
		)
}

export const getCookie = (name)=>{
	return cookies.get(name)
}

export const removeCookieToken = (name) => {
    return cookies.remove(name, { path: "/" })
}
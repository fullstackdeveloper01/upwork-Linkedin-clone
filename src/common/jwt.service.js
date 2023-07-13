import { nanoid } from 'nanoid'

const ID_TOKEN_KEY = "token";
const ID_RTOKEN_KEY = "rtoken";
const ID_USERINFO_KEY = "userinfo";
const ID_COOKIE_ACCEPTED = "cookie:accepted";
const ID_CLIENT_UNIQUEID = "cid";

function parseJwt (token) {
    var base64Url = token.split('.')[1]
	if (!base64Url) {
		return ''
	}

    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    var jsonPayload = decodeURIComponent(Buffer.from(base64, "base64").toString("ascii").split("").map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))

    return JSON.parse(jsonPayload)
}

function getClientId() {
	let clientId = localStorage.getItem(ID_CLIENT_UNIQUEID)
	if (!clientId) {
		clientId = nanoid()
		localStorage.setItem(ID_CLIENT_UNIQUEID, clientId)
	}
	return clientId;
}

function isCookieAccepted() {
	return localStorage.getItem(ID_COOKIE_ACCEPTED) == 'true'
}

function getToken() {
	let token = localStorage.getItem(ID_TOKEN_KEY) ? localStorage.getItem(ID_TOKEN_KEY) : null
	if (token != null) {
		const jwtPayload = parseJwt(token)
		console.log("token: " + JSON.stringify(jwtPayload))
		if (jwtPayload.exp < Date.now()/1000) {
			// token expired
			// clearAllTokenInfo()
			// return null
		}
	}
	return token
}

function saveToken(token) {
	localStorage.setItem(ID_TOKEN_KEY, token)
}

function saveSessionToken(token) {
	sessionStorage.setItem(ID_TOKEN_KEY, token)
}

function getRToken() {
	return localStorage.getItem(ID_RTOKEN_KEY) ? localStorage.getItem(ID_RTOKEN_KEY) : null
}

function saveRToken(token) {
	localStorage.setItem(ID_RTOKEN_KEY, token)
}

function getUserInfo() {
	let value;
	if ((value = localStorage.getItem(ID_USERINFO_KEY)) != null) {
		return JSON.parse(value)
	}
	else if ((value = sessionStorage.getItem(ID_USERINFO_KEY)) != null) {
		return JSON.parse(value)
	}

	return {
        authorities: null,
        storeNum: null,
        empNum: null,
        empName: "",
        classId: null,
        securityLevel: 1,
        enabled: false,
        username: null,
        accountNonLocked: false,
        accountNonExpired: false,
        credentialsNonExpired: false
    }
}

function saveUserInfo(userInfo) {
	const value = userInfo ? JSON.stringify(userInfo) : null
	localStorage.setItem(ID_USERINFO_KEY, value)
}

function clearAllTokenInfo() {
	localStorage.removeItem(ID_TOKEN_KEY)
	sessionStorage.removeItem(ID_TOKEN_KEY)

	localStorage.removeItem(ID_RTOKEN_KEY)
	sessionStorage.removeItem(ID_RTOKEN_KEY)

	localStorage.removeItem(ID_USERINFO_KEY)
	sessionStorage.removeItem(ID_USERINFO_KEY)
}

export default {
	getClientId,
	getToken,
	saveToken,
	saveSessionToken,
	getRToken,
	saveRToken,
	getUserInfo,
	saveUserInfo,
	clearAllTokenInfo,
	isCookieAccepted
};
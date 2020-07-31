export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT USER",
        payload: user
    }
}

// async
export const login = credentials => {
    return {
        return dispatch => {
            return fetch("http://127.0.0.1:3000/api/v1/login"){
                method: "POST", 
                headers: {
                    "Contnet-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            }
        }
    }
}
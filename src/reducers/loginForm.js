const initialState = {
    name: "",
    user_email: "",
    password: "",
    family_member_email: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_LOGIN_FORM":
        return action.formdata
      default:
        return state
    }
  }
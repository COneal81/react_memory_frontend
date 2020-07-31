import React from 'react'

const LoginInput = () => {
    return(
        <form onSubmit={undefined}>
            <input placeholder= "Your Name" type="text" value={undefined} name="name" onChange={undefined}/>
            <input placeholder= "Email" type="text" value={undefined} name="user_email" onChange={undefined}/>
            <input placeholder= "Password" type="text" value={undefined} name="password" onChange={undefined}/>
            <input placeholder= "Family Member Email" type="text" value={undefined} name="family_member_email" onChange={undefined}/>
            < input type="submit" value= "Login" />
    </form>
    )
    
}

export default LoginInput;
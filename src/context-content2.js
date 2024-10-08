import React from 'react';
import { userContext } from './context';

export default function Content2(){
    let [user,setUser] = React.useContext(userContext)

    const contentStyle ={
        background:'#ddd',
        textAlign:'center',
        margin:10,
        padding:10
    }

    const onClickSignin =(event) =>{
        event.preventDefault()
        setUser('Tom Jerry')
    }

    return(
        <div style={contentStyle}>
            {
                (user)
                ?<span>Hello {[user,setUser]}</span>
                :<span>Please&nbsp;<a href=' ' onClick={onClickSignin}>Signin</a></span>
            }
        </div>
    )
}
import React, { useState } from 'react'
import style from './style.module.scss'

export default function CreateAccount() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 


  function onChange(e){
    const {target:{ name, value }} = e;
    if(name === "name"){
      setUserName(value);
    }
    else if(name === "email"){
      setEmail(value);
    }
    else if(name === "password"){
      setPassword(value);
    }
  }

  function onSubmit(e){
    e.preventDefault()
  }

  return (
    <div className={style.login}>
      <h2>Dwitter</h2>
      <form onSubmit={onSubmit}>
        <input placeholder='이름' onChange={onChange}  value={userName} name='name' type='text' required={true}/>
        <input placeholder='이메일' onChange={onChange} value={email}  name='email' type='email' required={true}/>
        <input placeholder='비밀번호' onChange={onChange} value={password} name='password' type='password' required={true}/>
        <input placeholder='비밀번호 재확인' type='password' required={true}/>
        <input type='submit' value='Create Account'/>
      </form>
    </div>
  )
}

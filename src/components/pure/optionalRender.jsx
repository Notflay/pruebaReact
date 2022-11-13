import React, { useState } from "react";

// ? Estilo para logeado
const loggedStyle = {
    backgroundColor:'Green',
    color:'white'
};

// ? Estilo para deslogado
const unloggedStyle = {
    backgroundColor: 'Tomato',
    color: 'white',
    fontWeight: 'bold'
}

//Login / Logout buttons
const LoginButton = ({ loginAction, propStyle }) => {
  return (<button style={propStyle} onClick={loginAction}>Login</button>);
};

const LogoutButton = ({ logoutAction, propStyle  }) => {
  return (<button style={propStyle} onClick={logoutAction}>Log out</button>);
};

// ?(Expresión true) && expresión => se renderizza la expresión
// ? (Expresión false) && expresión => no se renderiza  la expresión




const OptionalRender = () => {
  const [acces, setacces] = useState(true);
  const [nNMessage, setnNMessage] = useState(0);

  /* const updateAcces = () => {
    setacces(!acces);
  }; */

  const loginAction = () => {
    setacces(true);
  };

  const logoutAction = () => {
    setacces(false);
  };

  let optionalButton;

  if (acces) {
    optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>;
  } else {
    optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>;
  }

  //Unread messages
  let unreadMessages = () => {
    setnNMessage(nNMessage + 1)
  } 

  return (<div> 
  {/* Optional Button */}
  {optionalButton} 
  {/* N Messages unread */}
  {/* { nNMessage > 0 &&  nNMessage === 1 && <p>Your have {nNMessage} new messages... </p>}
  { nNMessage > 1 && <p>{nNMessage} new messages... </p>}
  { nNMessage === 0 && <p>There are no new messages</p> } */}
  {/* Ternay Operator */}
  { acces ? ( <div> 
    { nNMessage > 0 ? 
        <p>Your have {nNMessage} new message{nNMessage > 1 ? 's' : null}...</p> 
        :   
        <p>There are no new messages</p>
        }
    <button onClick={unreadMessages}>Add new Message</button> 
    </div>): null}

  </div>);
};

export default OptionalRender;

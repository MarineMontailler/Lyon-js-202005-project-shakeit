import React, { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Form from "./Form";
import LogPage from "../../components/HomePage/LogPage"
import {AuthContext} from "./../AuthContext";



const LoginPage = props => {

const fakeAuth=useContext(AuthContext);

  const identifiants = {
    login: "p2",
    mdp: "p2mdp"
  };

  const [Login, setLogin] = useState("");
  const [Mdp, setMdp] = useState("");

  const loginHandleChange = e => {
    setLogin(e.target.value);
  };

  const mdpHandleChange = e => {
    setMdp(e.target.value);
  };

  const loginForm = e => {
    setTimeout(e.preventDefault(), 100);
    if (Login === identifiants.login && Mdp === identifiants.mdp) {
      fakeAuth.authenticate(() => {
        history.replace(from);
        console.log(fakeAuth.isAuthenticated);
      });
    } else alert("Erreur identifiants");
  };

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/protected" } };

  
  return (
    <>  

    
    <LogPage>
    
     <Form loginForm={loginForm} loginHandleChange={loginHandleChange} mdpHandleChange={mdpHandleChange}/>
     </LogPage>
    </>
     
  );
};

export default LoginPage;

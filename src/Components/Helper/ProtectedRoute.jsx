import React from 'react'
import { UserContext } from '../../UserContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const {login} =React.useContext(UserContext);
  //para mandar direto para a página de conta, sem precisar ir para a página de login
  if(login === true) {
    return children
  } else if(login === false) {
    return  <Navigate to='/login'/>
  } else {
    return <></>
  }

  //para ir para a página de login antes de ir para a página de conta utilize o código abaixo.
  // return login ? children : <Navigate to='/login'/>; <--- código que vai para a página de login antes de ir para a página de conta caso o usuário esteja logado ou não.
}

export default ProtectedRoute
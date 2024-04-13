// import styled ,{css}from "styled-components"

// function Login() {
  
//       return (
//       <Container>
//         <Content className="flex flex-row bg-green-600"><UserLogin className="bg-green-600">user</UserLogin>
//         <CollectorLogin className="bg-green-600">collector</CollectorLogin></Content>
//       </Container>
//   );
// }

// const Container = styled.section`
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   height: 100vh;
// `;

// const Content = styled.div`
//   margin-bottom: 100vw;
//   width: 100%;
//   position: relative;
//   min-height: 100vh;
//   box-sizing: border-box;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 80px 40px;
//   height: 100%;
// `;

// const UserLogin = styled.div`
//   background-color: blue;

// `;

// const CollectorLogin = styled.div`
//    background-color: blue;

// `;

// export default Login;
import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


function Login(props) {

  const handleAuth = async (e) => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      alert(error.message);
    })

  }

  return (
    <div className="text-center flex flex-col md:flex-row">
  <div className="flex flex-col md:flex-row mb-4 md:mr-4">
    <div className="card mb-4 md:mb-0 rounded-lg shadow-md md:flex-grow">
      <div className="card-body">
        <h1 className="text-3xl font-semibold mb-2">$0<small class="text-gray-500 font-light">/mo</small></h1>
        <ul className="text-left mt-3 mb-4">
          <li className="mb-1">10 users included</li>
          <li className="mb-1">2 GB of storage</li>
          <li className="mb-1">Email support</li>
          <li>Help center access</li>
        </ul>
        <button onClick={handleAuth} type="button" class="w-full btn btn-lg btn-outline-primary">Sign-in as user</button>
      </div>
    </div>
  </div>
  <div className="flex flex-col md:flex-row">
    <div className="card rounded-lg shadow-md md:flex-grow">
      <div className="card-body">
        <h1 className="text-3xl font-semibold mb-2">$15<small class="text-gray-500 font-light">/mo</small></h1>
        <ul className="text-left mt-3 mb-4">
          <li className="mb-1">20 users included</li>
          <li className="mb-1">10 GB of storage</li>
          <li className="mb-1">Priority email support</li>
          <li>Help center access</li>
        </ul>
        <button onClick={handleAuth} type="button" class="w-full btn btn-lg btn-primary">Sign-in as collector</button>
      </div>
    </div>
  </div>
</div>
  );
}

export default Login;

//grid grid-col-2  md:grid-rows-2 gap-4
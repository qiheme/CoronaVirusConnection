import React, { useState } from 'react';
import { Header, Container, Button, Form } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
// import AppLogo from "../Logo/index";

export default function SignUpForm() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();  
    console.log("Username is: " + username + ", and " + "Password is: " + password)
};

    return (
      <Container>
        {/* <AppLogo/> */}
        <Header as='h1'>Sign Up Page</Header>
        <Form onSubmit={handleFormSubmit}>
          <Form.Field>
            <label>Username</label>
            <input style={{ marginTop: "125px", height: "40px", width: "50em" }}
              type="text"
              name="username"
              onChange={(event) => setUserName(event.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>E-mail</label>
            <input style={{ marginTop: "30px", height: "40px", width: "50em" }}
              type="password"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Field>
          <Link to="/">
          <Button type='submit'>Sign Up</Button>
          </Link>
        </Form>
        <Link to="/">Need To Login, Instead?</Link>
      </Container>
    )
  };

  /* <Button/> '/' changed from '/login' to '/' */

  /* <Link/> goes to '/' instead of '/login'.  */


  //Below is what I had when i was trying to make a call to the api with signup -Adrian
//   const handleFormSubmit = e => {
//     e.preventDefault();  
//     console.log("Username is: " + username + ", and " + "Password is: " + password)
//     axios({
//       method: 'POST',
//       url: 'https://localhost:3001/users',
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Content-Type": "application/json",
//       },
//       data: {
//         username: username,
//         password: password
//       }
//     }). then(function (response) {
//       console.log(response.data);
//       console.log("Test1",response)
//     }).catch(err => console.log(err));
// };
import React from "react";
import { Card } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="text-center">Login</Card.Title>
        <Card.Text>
          <GoogleLogin
            clientId=""
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Login;

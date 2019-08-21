import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

import '../../styles/Login.css';

class Login extends Component {
  state = {

  };

  doLogin = () => {
    this.props.history.push('/backoffice');
  }

  render() {
    return (
      <div className="container-login">
        <div className="wrap-login">
          <img
            className="logo"
            src="/statics/images/deerlab_logo.jpg"
            alt="Deerlab Logo"
          />
          <Form className="form-login">
            <Form.Group>
              <Form.Control type="email" placeholder="Insert your email" />
            </Form.Group>

            <Form.Group>
              <Form.Control type="password" placeholder="Insert your password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="login-button" onClick={this.doLogin}>Login</Button>
          </Form>
        </div>
        <div className="company-footer">
          <span>
            Created by
            <a href="https://deerlab.studio" target="_blank" rel="noopener noreferrer"> Deerlab Studio</a>
          </span>
        </div>
      </div>
    );
  }
}

export default Login;

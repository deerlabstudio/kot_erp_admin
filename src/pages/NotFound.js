import React from 'react';
import { Button } from 'react-bootstrap';

import '../styles/NotFound.css';

const NotFound = (props) => {
  const message = 'Page not Found';

  return (
    <div className="container-notfound">
      <div className="wrap-notfound">
        <img
          className="logo"
          src="./statics/images/deerlab_logo.jpg"
          alt="Deerlab Logo"
        />
        <h2 className="message">{message}</h2>
        <Button
          variant="primary"
          type="button"
          className="button-back"
          onClick={() => {
            props.history.push('/login');
          }}
        >
          Back to Index
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

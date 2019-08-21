import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form } from 'react-bootstrap';

class UpdatePasswordModal extends Component {
  state = {
    id: this.props.data.id || 0,
    email: this.props.data.email || '',
    password: this.props.data.password || '',
  };

  handleInputChange = (event) => {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleOnCancel = () => {
    this.props.onCancel();
  }

  handleOnSubmit = () => {
    this.props.onSubmit(this.state);
  }

  render() {
    const { showModal } = this.props;
    const {
      email,
      password,
      id
    } = this.state;

    return (
      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>Cambiar Clave</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Correo</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Ingresa el Correo"
                value={email}
                onChange={this.handleInputChange}
                readOnly
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Clave</Form.Label>
              <input type="hidden" id="id" name="id" value={id} />
              <Form.Control
                name="password"
                type="password"
                placeholder="Ingresa la contraseña"
                value={password}
                onChange={this.handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleOnCancel}>Cancelar</Button>
          <Button variant="warning" onClick={this.handleOnSubmit}>Cambiar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

UpdatePasswordModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default UpdatePasswordModal;

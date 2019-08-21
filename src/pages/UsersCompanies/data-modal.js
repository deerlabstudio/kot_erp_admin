import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form } from 'react-bootstrap';
import { actionTypesModalResolver } from '../../lib/actionTypesModalResolver';

class ModalSave extends Component {
  state = {
    id: this.props.data.id || 0,
    firstname: this.props.data.firstname || '',
    lastname: this.props.data.lastname || '',
    email: this.props.data.email || '',
    password: this.props.data.password || '',
    status: this.props.data.status || true,
    usersTypesId: 1,
    company: 0,
  };

  handleInputChange = (event) => {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleInputSelect = (event) => {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: parseInt(value, 10),
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
      firstname,
      lastname,
      email,
      password,
      status,
      id
    } = this.state;

    const actionType = actionTypesModalResolver(this.props.actionType);

    return (
      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>{actionType.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            this.props.actionType !== 3 ? (
              <Form>
                <Form.Group>
                  <Form.Label>Nombres</Form.Label>
                  <input type="hidden" id="id" name="id" value={id} />
                  <Form.Control
                    name="firstname"
                    type="text"
                    placeholder="Ingresa los Nombres"
                    value={firstname}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Apellidos</Form.Label>
                  <Form.Control
                    name="lastname"
                    type="text"
                    placeholder="Ingresa los Apellidos"
                    value={lastname}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Ingresa el Correo"
                    value={email}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                {
                  this.props.actionType !== 2 ? (
                    <Form.Group>
                      <Form.Label>Clave</Form.Label>
                      <Form.Control
                        name="password"
                        type="password"
                        placeholder="Ingresa la contraseña"
                        value={password}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  ) : null
                }


                <Form.Group>
                  <Form.Label>Estado</Form.Label>
                  <select
                    className="form-control"
                    name="status"
                    onChange={this.handleInputSelect}
                    value={status}
                  >
                    <option key={1} value={1}>Activo</option>
                    <option key={0} value={0}>Inactivo</option>
                  </select>
                </Form.Group>
              </Form>
            ) : (
              <h4>Dou you want to delete the record?</h4>
            )
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleOnCancel}>Cancelar</Button>
          <Button
            variant={actionType.variant}
            onClick={this.handleOnSubmit}
          >
            {actionType.text}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ModalSave.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ModalSave;

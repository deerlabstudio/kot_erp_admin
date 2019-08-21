import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form } from 'react-bootstrap';
import { actionTypesModalResolver } from '../../lib/actionTypesModalResolver';

class ModalSave extends Component {
  state = {
    id: this.props.data.id || 0,
    code: this.props.data.code || '',
    name: this.props.data.name || '',
    logo: this.props.data.logo || '',
    webpage: this.props.data.webpage || '',
    status: this.props.data.status || true,
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
      [name]: parseInt(value, 10) === 1,
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
      code,
      name,
      logo,
      webpage,
      status,
      id,
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
                  <Form.Label>Código</Form.Label>
                  <input type="hidden" id="id" name="id" value={id} />
                  <Form.Control
                    name="code"
                    type="text"
                    placeholder="Ingresa un código para la empresa"
                    value={code}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Ingresa el nombre de la empresa"
                    value={name}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Logo</Form.Label>
                  <Form.Control
                    name="logo"
                    type="text"
                    placeholder="Ingresa la URL del logo"
                    value={logo}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Página Web</Form.Label>
                  <Form.Control
                    name="webpage"
                    type="text"
                    placeholder="Ingresa la URL del sitio Web"
                    value={webpage}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Estado</Form.Label>
                  <select
                    className="form-control"
                    name="status"
                    onChange={this.handleInputSelect}
                    value={status === true ? 'true' : 'false'}
                  >
                    <option key={1} value="true">Activo</option>
                    <option key={0} value="false">Inactivo</option>
                  </select>
                </Form.Group>
              </Form>
            ) : (
              <h4>Quieres eliminar el registro?</h4>
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

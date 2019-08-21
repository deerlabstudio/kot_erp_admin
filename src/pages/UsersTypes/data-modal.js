import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form } from 'react-bootstrap';
import { actionTypesModalResolver } from '../../lib/actionTypesModalResolver';

class ModalSave extends Component {
  state = {
    id: this.props.data.id || 0,
    name: this.props.data.name || '',
    description: this.props.data.description || '',
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
    const { name, description, id } = this.state;

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
                  <Form.Label>Nombre</Form.Label>
                  <input type="hidden" id="id" name="id" value={id} />
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Ingresa el nombre"
                    value={name}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    name="description"
                    type="text"
                    placeholder="Ingresa la descripción"
                    value={description}
                    onChange={this.handleInputChange}
                  />
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

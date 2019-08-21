import React, { Component } from 'react';
import { Button, Row } from 'react-bootstrap';

// Styles
import '../../styles/Crud.css';

// Components
import DataTable from './data-table';
import ModalSave from './data-modal';
import AlertMessage from '../../components/Alert';

// Services
import {
  getUsersTypesList,
  saveUsersTypes,
  updateUsersTypes,
  deleteUsersTypes,
} from '../../lib/services/userstypes';

class UsersTypes extends Component {
  state = {
    showModal: false,
    usersTypes: [],
    usersTypesWorking: {},
    actionType: 1,
    hasError: false,
  };

  componentDidMount() {
    this.handleGetUsersList().catch(this.errorHandler);
  }

  getListUsersTypes = () => getUsersTypesList();

  handleGetUsersList = () =>
  this.getListUsersTypes()
  .then((usersTypesList) => {
    this.setState({
      usersTypes: usersTypesList,
      hasError: false,
    });
  });

  errorHandler = () => {
    this.setState({ hasError: true });
  }

  handleActionNew = () => {
    this.setState({
      showModal: true,
      actionType: 1,
    });
  }

  handleEditAction = (user) => {
    this.setState({
      showModal: true,
      actionType: 2,
      usersTypesWorking: user,
    });
  }

  handleDeleteAction = (user) => {
    this.setState({
      showModal: true,
      actionType: 3,
      usersTypesWorking: user,
    });
  }

  handleSubmitModal = (data) => {
    const { actionType } = this.state;

    switch (actionType) {
      case 1:
        this.saveRegister(data);
        break;
      case 2:
        this.updateRegister(data);
        break;
      case 3:
        this.deleteRegister(data);
        break;
      default:
        // Nothing
        break;
    }

    this.setState({
      showModal: false,
      usersTypesWorking: {},
      actionType: 0,
    });
  }

  handleCancelModal = () => {
    this.setState({
      showModal: false,
      usersTypesWorking: {},
      actionType: 0,
    });
  }

  saveRegister = (data) => {
    saveUsersTypes(data)
    .then(() => {
      this.handleGetUsersList().catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  updateRegister = (data) => {
    const { id } = data;
    updateUsersTypes(id, data)
    .then(() => {
      this.handleGetUsersList().catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  deleteRegister = (data) => {
    const { id } = data;
    deleteUsersTypes(id)
    .then(() => {
      this.handleGetUsersList().catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  render() {
    const {
      showModal,
      usersTypes,
      usersTypesWorking,
      hasError,
      actionType,
    } = this.state;

    return (
      <>
        {
          hasError ? (
            <AlertMessage
              title="Opps, ocurrio un error!"
              message="Error al comunicarse con el servicio"
            />
          ) : null
        }
        <div className="panel">
          <Row>
            <Button onClick={this.handleActionNew}>Nuevo Registro</Button>
          </Row>
          <Row className="table-crud">
            <DataTable
              items={usersTypes}
              onEdit={this.handleEditAction}
              onDelete={this.handleDeleteAction}
            />
          </Row>
          {
            showModal ? (
              <ModalSave
                actionType={actionType}
                data={usersTypesWorking}
                showModal={showModal}
                onCancel={this.handleCancelModal}
                onSubmit={this.handleSubmitModal}
              />
            ) : null
          }
        </div>
      </>
    );
  }
}

export default UsersTypes;

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
  getUsersList,
  saveUsers,
  updateUsers,
  deleteUsers,
} from '../../lib/services/users';

import { getUsersTypesList } from '../../lib/services/userstypes';
import { getCompaniesList } from '../../lib/services/companies';

class Users extends Component {
  state = {
    showModal: false,
    users: [],
    usersTypesList: [],
    companiesList: [],
    userWorking: {},
    actionType: 1,
    hasError: false,
  };

  componentDidMount() {
    this.handleGetUsers().catch(this.errorHandler);
    this.handleGetUsersTypes().catch(this.errorHandler);
    this.handleGetCompanies().catch(this.errorHandler);
  }

  getUsers = () => getUsersList();

  getUsersTypes = () => getUsersTypesList();

  getCompanies = () => getCompaniesList();

  handleGetUsers = () =>
  this.getUsers()
  .then((usersList) => {
    this.setState({
      users: usersList,
      hasError: false,
    });
  });

  handleGetUsersTypes = () =>
  this.getUsersTypes()
  .then((usersTypes) => {
    this.setState({
      usersTypesList: usersTypes,
      hasError: false,
    });
  });

  handleGetCompanies = () =>
  this.getCompanies()
  .then((companies) => {
    this.setState({
      companiesList: companies,
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
      userWorking: user,
    });
  }

  handleDeleteAction = (user) => {
    this.setState({
      showModal: true,
      actionType: 3,
      userWorking: user,
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
      userWorking: {},
      actionType: 0,
    });
  }

  handleCancelModal = () => {
    this.setState({
      showModal: false,
      userWorking: {},
      actionType: 0,
    });
  }

  saveRegister = (data) => {
    saveUsers(data)
    .then(() => {
      this.handleGetUsers().catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  updateRegister = (data) => {
    const { id } = data;
    updateUsers(id, data)
    .then(() => {
      this.handleGetUsers().catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  deleteRegister = (data) => {
    const { id } = data;
    deleteUsers(id)
    .then(() => {
      this.handleGetUsers().catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  render() {
    const {
      showModal,
      users,
      usersTypesList,
      companiesList,
      userWorking,
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
              users={users}
              onEdit={this.handleEditAction}
              onDelete={this.handleDeleteAction}
            />
          </Row>
          {
            showModal ? (
              <ModalSave
                actionType={actionType}
                data={userWorking}
                usersTypesList={usersTypesList}
                companiesList={companiesList}
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

export default Users;

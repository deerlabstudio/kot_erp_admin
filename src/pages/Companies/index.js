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
  getCompaniesList,
  saveCompany,
  updateCompany,
  deleteCompany,
} from '../../lib/services/companies';

class Companies extends Component {
  state = {
    showModal: false,
    companies: [],
    companyWorking: {},
    actionType: 1,
    hasError: false,
  };

  componentDidMount() {
    this.handleGetCompaniesList().catch(this.errorHandler);
  }

  getListCompanies = () => getCompaniesList();

  handleGetCompaniesList = () =>
  this.getListCompanies()
  .then((companiesList) => {
    this.setState({
      companies: companiesList,
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

  handleEditAction = (company) => {
    this.setState({
      showModal: true,
      actionType: 2,
      companyWorking: company,
    });
  }

  handleDeleteAction = (company) => {
    this.setState({
      showModal: true,
      actionType: 3,
      companyWorking: company,
    });
  }

  handleViewUsersAction = (company) => {
    this.props.history.push(`/backoffice/companies/${company.id}/users`);
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
      companyWorking: {},
      actionType: 0,
    });
  }

  handleCancelModal = () => {
    this.setState({
      showModal: false,
      companyWorking: {},
      actionType: 0,
    });
  }

  saveRegister = (data) => {
    saveCompany(data)
    .then(() => {
      this.handleGetCompaniesList().catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  updateRegister = (data) => {
    const { id } = data;
    updateCompany(id, data)
    .then(() => {
      this.handleGetCompaniesList().catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  deleteRegister = (data) => {
    const { id } = data;
    deleteCompany(id)
    .then(() => {
      this.handleGetCompaniesList().catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  render() {
    const {
      showModal,
      companies,
      companyWorking,
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
              items={companies}
              onEdit={this.handleEditAction}
              onDelete={this.handleDeleteAction}
              onViewUsers={this.handleViewUsersAction}
            />
          </Row>
          {
            showModal ? (
              <ModalSave
                actionType={actionType}
                data={companyWorking}
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

export default Companies;

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'react-bootstrap';

const DataTable = props => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Nombres</th>
        <th>Apellidos</th>
        <th>Correo</th>
        <th>Compañia</th>
        <th>Tipo Usuario</th>
        <th>Estado</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.companyInfo.name}</td>
            <td>{user.UsersType.name}</td>
            <td>{user.status ? 'Activo' : 'Inactivo'}</td>
            <td>
              <Button variant="outline-info" onClick={() => props.onEdit(user)}>Editar</Button>
              <Button variant="outline-danger" onClick={() => props.onDelete(user)}>Eliminar</Button>
            </td>
          </tr>
        ))
      }
    </tbody>
  </Table>
);

DataTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

DataTable.defaultProps = {
  users: [],
};

export default DataTable;

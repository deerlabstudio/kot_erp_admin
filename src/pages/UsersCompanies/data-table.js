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
            <td>{user.status ? 'Activo' : 'Inactivo'}</td>
            <td>
              <Button variant="outline-info" onClick={() => props.onEdit(user)}>Editar</Button>
              <Button variant="outline-danger" className="ml-1" onClick={() => props.onDelete(user)}>Eliminar</Button>
              <Button variant="warning" className="ml-1" onClick={() => props.onChangePassword(user)}>Cambiar Clave</Button>
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

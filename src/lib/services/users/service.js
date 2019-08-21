import { processResponse } from '../../responseHandler';
import { errorHandler } from '../../errorHandler';

import ServicesEndpoints from '../../../config/services_config';

export default class UsersServices {
  constructor() {
    this.serviceUrl = ServicesEndpoints.users_services;
  }

  getUsers() {
    return fetch(`${this.serviceUrl}/users`)
      .then(processResponse)
      .catch(errorHandler);
  }

  getUserById(id) {
    return fetch(`${this.serviceUrl}/users/${id}`)
      .then(processResponse)
      .catch(errorHandler);
  }

  storeUsers(user) {
    return fetch(`${this.serviceUrl}/users`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
      .then(processResponse)
      .catch(errorHandler);
  }

  updateUsers(id, user) {
    return fetch(`${this.serviceUrl}/users/${id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
      .then(processResponse)
      .catch(errorHandler);
  }

  deleteUsers(id) {
    return fetch(`${this.serviceUrl}/users/${id}`, {
        method: 'delete',
      })
      .then(processResponse)
      .catch(errorHandler);
  }
}

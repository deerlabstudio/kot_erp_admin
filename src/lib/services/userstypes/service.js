import { processResponse } from '../../responseHandler';
import { errorHandler } from '../../errorHandler';

import ServicesEndpoints from '../../../config/services_config';

export default class UsersTypesServices {
  constructor() {
    this.serviceUrl = `${ServicesEndpoints.users_services}`;
  }

  getUsersTypes() {
    return fetch(`${this.serviceUrl}/userstypes`)
      .then(processResponse)
      .catch(errorHandler);
  }

  getUsersTypesById(id) {
    return fetch(`${this.serviceUrl}/userstypes/${id}`);
  }

  storeUsersTypes(usersTypes) {
    return fetch(`${this.serviceUrl}/userstypes`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usersTypes)
    });
  }

  updateUsersTypes(id, usersTypes) {
    return fetch(`${this.serviceUrl}/userstypes/${id}`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usersTypes)
    });
  }

  deleteUsersTypes(id) {
    return fetch(`${this.serviceUrl}/userstypes/${id}`, {
      method: 'delete',
    });
  }
}

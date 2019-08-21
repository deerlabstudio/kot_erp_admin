import { processResponse } from '../../responseHandler';
import { errorHandler } from '../../errorHandler';

import ServicesEndpoints from '../../../config/services_config';

export default class CompaniesServices {
  constructor() {
    this.serviceUrl = `${ServicesEndpoints.companies_services}`;
  }

  getCompanies() {
    return fetch(`${this.serviceUrl}/companies`)
      .then(processResponse)
      .catch(errorHandler);
  }

  getCompanyById(id) {
    return fetch(`${this.serviceUrl}/companies/${id}`);
  }

  storeCompany(company) {
    return fetch(`${this.serviceUrl}/companies`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(company)
    });
  }

  updateCompany(id, company) {
    return fetch(`${this.serviceUrl}/companies/${id}`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(company)
    });
  }

  deleteCompany(id) {
    return fetch(`${this.serviceUrl}/companies/${id}`, {
      method: 'delete',
    });
  }
}

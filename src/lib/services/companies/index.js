import CompaniesServices from './service';
import { transformListCompanies, transformCompany } from './transform';

export async function getCompaniesList() {
  try {
    const companiesServices = new CompaniesServices();
    const companiesList = await companiesServices.getCompanies();
    return transformListCompanies(companiesList);
  } catch (error) {
    throw error;
  }
}

export async function getCompanyById(id) {
  try {
    const companiesServices = new CompaniesServices();
    const company = await companiesServices.getCompanyById(id);
    return company;
  } catch (error) {
    throw error;
  }
}

export async function saveCompany(data) {
  try {
    const companiesServices = new CompaniesServices();
    const company = await companiesServices.storeCompany(data);
    return transformCompany(company);
  } catch (error) {
    throw error;
  }
}

export async function updateCompany(id, data) {
  try {
    const companiesServices = new CompaniesServices();
    const company = await companiesServices.updateCompany(id, data);
    return transformCompany(company);
  } catch (error) {
    throw error;
  }
}

export async function deleteCompany(id) {
  try {
    const companiesServices = new CompaniesServices();
    const company = await companiesServices.deleteCompany(id);
    return transformCompany(company);
  } catch (error) {
    throw error;
  }
}

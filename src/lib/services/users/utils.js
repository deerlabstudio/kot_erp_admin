import * as BPromise from 'bluebird';
import { uniq } from 'lodash';
import { getCompanyById } from '../companies';
import { transformListCompanies } from '../companies/transform';

function getCompaniesIds(users) {
  const ids = users.map(user => user.company);
  return uniq(ids).filter(id => id !== 0 && id !== null);
}

function getSingularCompanyInfo(companiesList, user) {
  const companyData = companiesList.find(company => company.id === user.company);
  if (companyData) {
    return companyData;
  }

  return {
    id: 0,
    name: 'Sin Compañia',
  };
}

async function getCompaniesInfo(ids) {
  return BPromise.map(
    ids,
    id => getCompanyById(id),
    { concurrency: 20 },
  );
}

export async function getUsersWithCompany(users) {
  const companiesIds = getCompaniesIds(users);
  const companiesCalls = await getCompaniesInfo(companiesIds);
  let companiesList = await BPromise.all(companiesCalls.map(call => call.json()));
  companiesList = transformListCompanies(companiesList);
  return users.map(user => ({
      ...user,
      companyInfo: getSingularCompanyInfo(companiesList, user),
    }));
}

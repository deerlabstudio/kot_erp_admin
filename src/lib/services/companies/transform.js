const transformCompany = user => ({
  id: user.id,
  code: user.code,
  name: user.name,
  logo: user.logo,
  webpage: user.webpage,
  status: user.status,
});

const transformListCompanies = listCompanies => listCompanies
  .map(company => transformCompany(company));

export {
  transformCompany,
  transformListCompanies,
};

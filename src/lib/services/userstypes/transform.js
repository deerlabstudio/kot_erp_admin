const transformUsersType = item => ({
  id: item.id,
  name: item.name,
  description: item.description,
});

const transformListUsersTypes = listItems => listItems.map(item => transformUsersType(item));

export {
  transformUsersType,
  transformListUsersTypes,
};

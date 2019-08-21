import UsersTypesServices from './service';
import { transformListUsersTypes, transformUsersType } from './transform';

export async function getUsersTypesList() {
  try {
    const usersTypesServices = new UsersTypesServices();
    const usersTypesList = await usersTypesServices.getUsersTypes();
    return transformListUsersTypes(usersTypesList);
  } catch (error) {
    throw error;
  }
}

export async function saveUsersTypes(data) {
  try {
    const usersTypesServices = new UsersTypesServices();
    const usersTypes = await usersTypesServices.storeUsersTypes(data);
    return transformUsersType(usersTypes);
  } catch (error) {
    throw error;
  }
}

export async function updateUsersTypes(id, data) {
  try {
    const usersTypesServices = new UsersTypesServices();
    const usersTypes = await usersTypesServices.updateUsersTypes(id, data);
    return transformUsersType(usersTypes);
  } catch (error) {
    throw error;
  }
}

export async function deleteUsersTypes(id) {
  try {
    const usersTypesServices = new UsersTypesServices();
    const usersTypes = await usersTypesServices.deleteUsersTypes(id);
    return transformUsersType(usersTypes);
  } catch (error) {
    throw error;
  }
}

import UserServices from './service';
import { transformListUsers } from './transform';
import { getUsersWithCompany } from './utils';

export async function getUsersList() {
  try {
    const userServices = new UserServices();
    let usersList = await userServices.getUsers();
    usersList = await getUsersWithCompany(usersList);
    return transformListUsers(usersList);
  } catch (error) {
    throw error;
  }
}

export async function saveUsers(data) {
  try {
    const userServices = new UserServices();
    const user = await userServices.storeUsers(data);
    return user;
  } catch (error) {
    throw error;
  }
}

export async function updateUsers(id, data) {
  try {
    const userServices = new UserServices();
    const user = await userServices.updateUsers(id, data);
    return user;
  } catch (error) {
    throw error;
  }
}

export async function deleteUsers(id) {
  try {
    const userServices = new UserServices();
    const user = await userServices.deleteUsers(id);
    return user;
  } catch (error) {
    throw error;
  }
}

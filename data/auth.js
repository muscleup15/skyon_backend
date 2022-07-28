import * as DB from './model.js';

//TODO ERROR HANDLING
export async function findById(id) {
  return DB.user.findByPk(id);
}

export async function createUser(user) {
  return DB.user.create(user).then((data) => {
    console.log(data);
    return data;
  });
}

export async function updateUser(id, password) {
  return DB.user.update({ password: password }, { where: { uid: id } });
}

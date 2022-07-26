import * as DB from './model.js';

export async function findById(id) {
  return DB.user.findByPk(id);
}

export async function createUser(user) {
  DB.user.create(user).then((data) => {
    console.log(data);
    return data;
  });
}

export async function updateUser(id, password) {
  return DB.user.update({ password: password }, { where: { uid: id } });
}

import userSave from "./user/saveUser";
import getAll from "./user/getAll";
import deleteUser from "./user/deleteUser";

export default class Backend {
  static readonly users = {
    save: userSave,
    get: getAll,
    delete: deleteUser,
  };
}

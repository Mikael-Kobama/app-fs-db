import userSave from "./user/saveUser";
import getAll from "./user/getAll";

export default class Backend {
  static readonly users = {
    save: userSave,
    get: getAll,
  };
}

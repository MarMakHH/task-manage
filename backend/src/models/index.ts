import User from './User.js';
import Task from './Task.js';

export { User, Task };

const models = {
  User,
  Task,
};

export default models;

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Object.assign(models, module.exports);
  module.exports.default = models;
}

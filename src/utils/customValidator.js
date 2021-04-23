import _ from 'lodash';

export class Validator {
  errors = {}
  messages = {
    isEmpty: 'This field is required.'
  }

  isEmpty(data) {
    return _.isEmpty(data)
  }

  addErrorMessage(key, message) {
    this.errors[key].append(message)
  }

  addError(key, errors) {
    this.errors[key] = errors
  }

  getErrors() {
    return this.errors
  }

  validate (schema, data) {
    for (const [key, value] of Object.entries(schema)) {
      let errors = []
      for (const [, name] of Object.entries(value)) {
        if (this[name](data[key]) === true) {
          errors.push(this.messages[name])
        }
      } 

      if (errors.length > 0) {
        this.addError(key, errors)
      }
    }
  }

}

// eslint-disable-next-line
export default { Validator }

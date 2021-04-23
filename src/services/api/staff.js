import ApiCore from './core'

// plural and single may be used for message logic if needed in the ApiCore class.

// ApiCore is designed by a resource based format but since the tagging API
// is have a unique endpoint for managing its resources. Every tagging
// endpoints must create an intance of ApiCore to be able to send
// a request
const staffLogin = new ApiCore({
  post: true,
  url: 'clients/login'
});


export { staffLogin };

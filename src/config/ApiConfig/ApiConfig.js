export const Base = "http://localhost:5001/api/";

const API = {
  Auth: {
    Login: `${Base}signin`,
    SignUp: `${Base}register`,
    // Forget: `${Base}forget`,
  },
  Product: {
    Products: `${Base}products`,
  },
  Category: {
    Categories: `${Base}categories`,
    Create: `${Base}category`,
  },
};
export default API;

export const Base = "http://localhost:5001/api/";

const API = {
  Auth: {
    Login: `${Base}signin`,
    SignUp: `${Base}register`,
    // Forget: `${Base}forget`,
  },
};
export default API;

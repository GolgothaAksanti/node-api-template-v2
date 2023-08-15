import SignupValidator from '@src/app/validator/user/validator.signup';
import SigninValodator from '@src/app/validator/user/validator.singin';

const Signup = new SignupValidator();
const Signin = new SigninValodator();

const User = {
  Signup,
  Signin,
};

export default User;

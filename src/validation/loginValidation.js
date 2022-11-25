function loginValidation(userInfo) {
  const errorList = [];

  const {email, password} = userInfo;

  if (email == "") {
    errorList.push({
      input: "email",
      message: "Please enter your email address!",
    });
  }

  if (email.length < 5) {
    errorList.push({
      input: "email",
      message: "Please enter a valid email address!",
    });
  }
  if (email.length > 40) {
    errorList.push({
      input: "email",
      message: "Email address should be less than 40 characters!",
    });
  }
  if (password == "") {
    errorList.push({
      input: "password",
      massage: "Please enter your password!",
    });
  }
  if (password.length < 8) {
    errorList.push({
      input: "password",
      message: "Password should be at least 8 characters!",
    });
  }
 
  return errorList;
  
}
export default loginValidation;

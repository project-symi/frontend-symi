const emailValidation = email => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

const nameValidation = name => {
  const regex = /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/;
  return regex.test(name);
};

//TODO add more validation
const formValidation = ({ employeeId, email, department, name, dateOfBirth, type }) => {
  let errors = { result: false, errorMessages: [] };
  if (!employeeId || employeeId.length < 1) errors.errorMessages.push('an employee ID');
  if (!emailValidation(email)) errors.errorMessages.push('a valid email address');
  if (!department || department.length < 1) errors.errorMessages.push('a department');
  if (!nameValidation(name) || name.length < 1) errors.errorMessages.push('an employee name');
  if (!dateOfBirth || dateOfBirth.length < 1) errors.errorMessages.push('employee\'s date of birth (will be used as a default password)');
  if (!type) errors.errorMessages.push('an access type');
  if (errors.errorMessages.length < 1) {
    return { result: true, message: 'everything is OK' };
  }
  errors.errorMessages = errors.errorMessages.join(', ');
  return errors;
};


module.exports = {
  formValidation,
};

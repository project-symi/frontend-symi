const emailValidation = email => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

const nameValidation = name => {
  const regex = /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/;
  return regex.test(name);
};

//TODO add more validation
// const formValidation = ({ employeeId, email, department, name, dateOfBirth, type }) => {
//   let errors = { result: false, errorMessages: [] };
//   if (!employeeId || employeeId.length < 1) errors.errorMessages.push('an employee ID');
//   if (!emailValidation(email)) errors.errorMessages.push('a valid email address');
//   if (!department || department.length < 1) errors.errorMessages.push('a department');
//   if (!nameValidation(name) || name.length < 1) errors.errorMessages.push('an employee name');
//   if (!dateOfBirth || dateOfBirth.length < 1) errors.errorMessages.push('employee\'s date of birth (will be used as a default password)');
//   if (!type) errors.errorMessages.push('an access type');
//   if (errors.errorMessages.length < 1) {
//     return { result: true, message: 'everything is OK' };
//   }
//   errors.errorMessages = errors.errorMessages.join(', ');
//   return errors;
// };


const formValidation = ({ employeeId, email, department, name, dateOfBirth, type }) => {
  let errors = { result: false, errors: { employeeId: { isShown: false, message: '' }, email: { isShown: false, message: '' },
    department: { isShown: false, message: '' }, name: { isShown: false, message: '' },
    dateOfBirth: { isShown: false, message: '' }, type: { isShown: false, message: '' }} };
  if (!employeeId || employeeId.length < 1) {
    errors.errors.employeeId.isShown = true;
    errors.errors.employeeId.message = 'A valid employee ID is required';
    //tell that we have an error
    errors.result = true;
  }
  if (!emailValidation(email)) {
    errors.errors.email.isShown = true;
    errors.errors.email.message = 'A valid email is required';
    errors.result = true;
  }
  if (!department || department.length < 1) {
    errors.errors.department.isShown = true;
    errors.errors.department.message = 'A valid department is required';
    errors.result = true;
  }
  if (!nameValidation(name) || name.length < 1) {
    errors.errors.name.isShown = true;
    errors.errors.name.message = 'A valid employee name is required';
    errors.result = true;
  }
  if (!dateOfBirth || dateOfBirth.length < 1) {
    errors.errors.dateOfBirth.isShown = true;
    errors.errors.dateOfBirth.message = 'A valid date of birth is required';
    errors.result = true;
  }
  if (!type) {
    errors.errors.type.isShown = true;
    errors.errors.type.message = 'A valid access type is required';
    errors.result = true;
  }
  return errors;
};


module.exports = {
  formValidation,
};

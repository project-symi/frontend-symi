const emailValidation = email => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

const nameValidation = name => {
  const regex = /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/;
  return regex.test(name);
};

//TODO add more validation
const formValidation = ({ employeeId, email, department, name, dateOfBirth, type, gender }) => {
  let errors = { result: false, errors: { employeeId: { isShown: false, message: '' }, email: { isShown: false, message: '' },
    department: { isShown: false, message: '' }, name: { isShown: false, message: '' },
    dateOfBirth: { isShown: false, message: '' }, type: { isShown: false, message: '' }, gender: { isShown: false, message: ''}} };
  if (!employeeId) {
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
    console.log({type});
    errors.errors.type.isShown = true;
    errors.errors.type.message = 'A valid access type is required';
    errors.result = true;
  }
  if (!gender) {
    errors.errors.gender.isShown = true;
    errors.errors.gender.message = 'Gender is required';
    errors.result = true;
  }
  return errors;
};

const feedbackValidation = ({ note, about, input }) => {
  let errors = {result: false, errors: {note: {isShown: false, message: ''}, about: {isShown: false, message: ''}, input: {isShown: false, message: '' }}};
  if (!about) {
    errors.errors.about.isShown = true;
    errors.errors.about.message = 'This field is required';
    //tell that we have an error
    errors.result = true;
  }
  if (about) {
    if (about === 'Employee' && !input || about === 'News' && !input) {
      errors.errors.input.isShown = true;
      errors.errors.input.message = 'This field is required';
      //tell that we have an error
      errors.result = true;
    }
  }
  if (!note) {
    errors.errors.note.isShown = true;
    errors.errors.note.message = 'This field is required';
    //tell that we have an error
    errors.result = true;
  }
  return errors;
};

const extractCsvData = (arr) => {
  //TODO add additional check for columns
  const columns = arr[0].reduce((acc, val, i) => {
    acc[val] = i;
    return acc;
  }, {});

  const employees = arr.reduce((acc, val, i) => {
    if (i > 0 && val.length > 1) {
      const obj = { employeeId: val[columns.employeeId], name: val[columns.name], department: val[columns.department],
        email: val[columns.email], gender: val[columns.gender], dateOfBirth: val[columns.dateOfBirth], type: val[columns.type] };
      acc.push(obj);
    }
    return acc;
  }, []);
  return employees;
};

const debounce = (a,b,c) => {
  var d,e;
  return function(){
    function h(){
      d=null;
      c||(e=a.apply(f,g));
    }
    var f=this,g=arguments;
    return (clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e);
  };
};

module.exports = {
  formValidation,
  feedbackValidation,
  extractCsvData,
  debounce
};

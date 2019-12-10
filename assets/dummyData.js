// FEEDBACK HISTORY
const feedbacks = [
  {
    feeling: 'good',
    category: 'Employee',
    name: 'Yuki',
    note: 'he\'s super helpful and a hardworker',
    dateAdded: '12/15/2009',
    points: 10,
    status: 'unseen',
    id: '1111'
  },
  {
    feeling: 'meh',
    category: 'Benefits',
    note: 'there\'s no gym memebership',
    dateAdded: '12/15/2009',
    points: 10,
    status: 'unseen',
    id: '2222',
    name: ''
  },
  {
    feeling: 'sad',
    category: 'Holidays',
    note: 'I don\'t have Hanukkah off...',
    dateAdded: '12/15/2009',
    points: 10,
    status: 'seen',
    id: '3333',
    name: ''
  }
];


// feedback sentiment by category dummy data
const feedbacksByFeeling = [
  { name: '😊', value: 40, feeling: 'good' },
  { name: '😐', value: 30, feeling: 'meh' },
  { name: '😞', value: 34, feeling: 'sad' }
];

//dummy data for fuzzy name input
const employees = [
  { name: 'Mini Meow', department: 'Marketing', employeeId: '1234' },
  { name: 'Igor Dawg', department: 'HR', employeeId: '4321' },
  { name: 'Yukio Lion', department: 'Engineering', employeeId: '2345' },
  { name: 'Steffie Frog', department: 'Operations', employeeId: '6543' }
];

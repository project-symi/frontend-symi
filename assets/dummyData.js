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
// const employees = [
//   { name: 'Mini Meow', department: 'Marketing', employeeId: 'A000001' },
//   { name: 'Igor Dawg', department: 'HR', employeeId: 'B000300' },
//   { name: 'Yukio Lion', department: 'Engineering', employeeId: 'X009999' },
//   { name: 'Steffie Frog', department: 'Operations', employeeId: 'B000500' }
// ];

const rewards = [
  {
    points: 50,
    categoryName: 'Received Positive Feedback',
    date: '01/12/2019',
    feedbackNote: 'he is awesome and such'
  },
  {
    points: 5,
    categoryName: 'Poll',
    date: '02/12/2019',
    feedbackNote: 'Awesome news'
  },
  {
    points: 10,
    categoryName: 'Submitted Feedback',
    date: '04/12/2019',
    feedbackNote: 'I wish we had a gym benefit.'
  }
];

const totalPoints = 500;

const topEmployees = [
  {
    name: 'Igor Dawg',
    id: 'B000300',
    point: 500,
    department: 'Development',
    gender: 'male'
  },
  {
    name: 'Mini Meow',
    id: 'A000001',
    point: 400,
    department: 'Leadership',
    gender: 'female'
  },
  {
    name: 'Yukio Lion',
    id: 'X009999',
    point: 100,
    department: 'Engineering',
    gender: 'male'
  },
  {
    name: 'Steffie Frog',
    id: 'B000500',
    point: 150,
    department: 'Operations',
    gender: 'female'
  },
  {
    name: 'Potato Fan',
    id: 'B000301',
    point: 300,
    department: 'Marketing',
    gender: 'male'
  },
  {
    name: 'Nao Arimura',
    id: 'X009990',
    point: 200,
    department: 'Marketing',
    gender: 'female'
  },
  {
    name: 'Eriko Babe',
    id: 'X009990',
    point: 200,
    department: 'Marketing',
    gender: 'female'
  }
];

module.exports = { totalPoints, rewards, topEmployees };

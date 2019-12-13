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
    Name: 'Igor Dawg',
    Id: 1,
    Point: 500,
    Department: 'Development',
    Gender: 'male'
  },
  {
    Name: 'Mini Meow',
    Id: 2,
    Point: 400,
    Department: 'Leadership',
    Gender: 'female'
  },
  {
    Name: 'Yukio Lion',
    Id: 3,
    Point: 100,
    Department: 'Engineering',
    Gender: 'male'
  },
  {
    Name: 'Steffie Frog',
    Id: 4,
    Point: 150,
    Department: 'Operations',
    Gender: 'female'
  },
  {
    Name: 'Potato Fan',
    Id: 5,
    Point: 300,
    Department: 'Marketing',
    Gender: 'male'
  }
];

module.exports = { totalPoints, rewards, topEmployees };

import Link from 'next/link';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div>
        {/* CEO */}
        <button> Dashboard </button>
        <button> Meetings </button>
        <button> Assignments </button>
        {/* EMPLOYEE */}
        <button> Feedback </button>
        <button> History </button>
        <button> News </button>
        <button> Notifications </button>
        {/* ADMIN */}
        <button> Users </button>
        <button> Updates </button>
        <button> Polls </button>
        <button> Assignments </button>
        {/* ALL */}
        <button> About </button>
      </div>
    );
  }
}

import React, { PureComponent } from 'react';

class Dashboard extends PureComponent {
  componentDidMount() {
    fetch("/api/test")
      .then(res => res.json())
      .then((result) => {
        console.log(result)
      },
        (error) => {
          console.log(error);
        })
  }
  render() {
    return (
      <div>Dashboard</div>
    );
  }
}

export default Dashboard;

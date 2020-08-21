import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
`;

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
      <Container>midhun</Container>
    );
  }
}

export default Dashboard;

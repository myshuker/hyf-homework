import React from 'react';

class Counter extends React.Component {
  state = { counter: this.props.initialCounter };

  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  render() {
    return <div>
       <p> You have used  <strong> <i> {this.state.counter} </i> </strong>  seconds on this website</p>
   
    </div>;
  }
}

export default Counter;
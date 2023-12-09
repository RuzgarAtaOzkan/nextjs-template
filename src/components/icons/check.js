// MODULES
import React from 'react';
import { ImCheckmark } from 'react-icons/im';

class Check extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <ImCheckmark className={this.props.className} />;
  }
}

export default Check;

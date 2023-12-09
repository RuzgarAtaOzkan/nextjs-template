// MODULES
import React from 'react';
import cn from 'classnames';

// CONTEXT
import { Context } from '../../context';

// STYLES
import style from './style.module.css';

class Toaster extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return <div className={cn(style['toaster'])}></div>;
  }
}

export default Toaster;

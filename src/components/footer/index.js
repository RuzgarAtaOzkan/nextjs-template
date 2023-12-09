// MODULES
import React from 'react';
import cn from 'classnames';

// CONTEXT
import { Context } from '../../context';

// STYLES
import style from './style.module.css';

class Footer extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <footer className={cn(style['footer'])}>footer</footer>;
  }
}

export default Footer;

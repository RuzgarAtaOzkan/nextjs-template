// MODULES
import React from 'react';
import cn from 'classnames';

// CONTEXT
import { Context } from '../../context';

// STYLES
import style from './style.module.css';

class Header extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <header className={cn(style['header'])}>header</header>;
  }
}

export default Header;

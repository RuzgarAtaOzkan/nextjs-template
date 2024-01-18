// MODULES
import React from 'react';
import cn from 'classnames';
import Script from 'next/script';

// CONTEXT
import { Context } from '../../../context';

// COMPONENTS
import Header from '../../header';
import Footer from '../../footer';
import Toaster from '../../toaster';

// UTILS
import UTILS from '../../../utils/index.js';
import UTILS_API from '../../../utils/api.js';

// STYLES
import style from './style.module.css';

class Layout_user extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <>
        <Header />
        <Toaster />

        <main className={cn(style['main'])}>
          {this.props.children || this.props.element}
        </main>

        <Footer />

        <Script
          id="1"
          src="https://js.hcaptcha.com/1/api.js"
          async
          defer
        ></Script>

        <Script
          id="2"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F28TSKZ877"
        ></Script>

        <Script
          id="3"
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-F28TSKZ877');",
          }}
        ></Script>
      </>
    );
  }
}

export default Layout_user;

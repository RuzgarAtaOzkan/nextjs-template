// MODULES
import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

// COMPONENTS
import Head from '../../components/head';
import UserLayout from '../../components/layouts/user';

// STYLES
import style from './style.module.css';

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Head
          title="Quontraly.com | Blockchain Security with AI"
          desc="Contract audit and investment security with artificial intelligence. Quontraly is a security company."
        />

        <main>
          <section className={cn('section', style['sectionerror'])}>
            <div className={cn(style['sectionerror-ctr'])}>
              <div className={cn(style['sectionerror-ctr-title'])}>
                {this.props.data}
              </div>

              <div className={cn(style['sectionerror-ctr-desc'])}>
                {this.props.data === 404
                  ? "Sorry, couldn't find the page you are looking for."
                  : null}
              </div>

              <Link className={cn(style['sectionerror-ctr-homebtn'])} href="/">
                Go home
              </Link>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Error;

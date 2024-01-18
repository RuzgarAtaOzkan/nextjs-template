// MODULES
import React from 'react';
import axios from 'axios';
import cn from 'classnames';

// COMPONENTS
import Head from '../components/head';
import Layout_user from '../components/layouts/user';

// CONTEXT
import { Context } from '../context';

// UTILS
import UTILS_API from '../utils/api.js';

// STYLES
import style from '../styles/pages/home.module.css';

class Home extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {};

    this.test = this.test.bind(this);
  }

  async test() {
    const res = await UTILS_API.axios_instance.get('https://google.com');
    console.log(res.data);
  }

  componentDidMount() {
    this.test();
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <>
        <Head title="Next.js" desc="desc" />
        <Layout_user>
          <div className={cn(style['test'])}>test</div>
        </Layout_user>
      </>
    );
  }
}

export default Home;

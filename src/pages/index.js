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

// SERVER SIDE
export async function getServerSideProps({ req }) {
  console.log(req.ip);

  return {
    props: {},
  };
}

// CLIENT SIDE
class Home extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('this.props:', this.props);
    console.log('this.context:', this.context);
    console.log('this.state:', this.state);
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <>
        <Head title="Next.js" desc="desc" />
        <Layout_user>main</Layout_user>
      </>
    );
  }
}

export default Home;

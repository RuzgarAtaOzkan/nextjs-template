// MODULES
import React from 'react';

// COMPONENTS
import Head from '../components/head';
import Layout_user from '../components/layouts/user';

// CONTEXT
import { Context } from '../context';

class Home extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

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

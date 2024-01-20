// MODULES
import React from 'react';

// Keep the context update as minimum as possible during the lifecycle of the application.
const initial_state = {
  // UI props
  ui_sidebar_open: false,
  ui_toasts: [],
  // user props
  ui: {
    sidebar_open: false,
    toasts: [],
  },
  user: {
    auth: null, // false = logged out, true = logged in, null = waiting for the server response
    // httponly cookie in the browser's backend for authentication
    _id: '',
    username: '',
    email: '',
    email_verified: false,
    role: 'user',
    img: '',
  },
  // wallet props
  wallet_address: null,
};

export const Context = React.createContext(initial_state);

function reducer(state = initial_state, action) {
  return {
    ...action,
  };
}

export default function Provider({ children }) {
  const [state, set_state] = React.useReducer(reducer, initial_state);

  return (
    <Context.Provider value={{ state, set_state }}>{children}</Context.Provider>
  );
}

/*** USAGE:

// MODULES
import React from 'react';

// CONTEXT
import { Context } from '../context';

class Home extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.context.state); => { ui_toasts: [], user_auth: null }
    this.context.set_state({ ...new values });
  }

  componentDidUpdate() {}

  render() {
    return (
      <>
        <Head title="Kaciriyosun" desc="Kacirma" />

        <Layout_user>Home</Layout_user>
      </>
    );
  }
}

*/

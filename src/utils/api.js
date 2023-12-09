// MODULES
import axios from 'axios';

// CONFIG
import config from '../config';

/**
 *
 * AXIOS axios_instance configuration
 *
 */
export const axios_instance = axios.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * API function return types
 *
 * ERROR { code: 'ERR_BAD_REQUEST', message: 'Credentials are not provided', type: 'auth:signin', data: undefined }
 *
 * SUCCESS { data: { _id: '123' }, headers: { 'Content-Type: 'application/json' }, code: undefined }
 *
 */

/**
 *
 * GET PROFILE data from the server, also checks if current user is logged in with sid cookie?
 *
 */
export async function get_profile(version = 1) {
  if (!Number(version)) {
    throw new Error('Invalid api version specified in get_profile');
  }

  const url = config.api_url + '/v' + version + '/profile';

  try {
    const res = await axios_instance.get(url);

    res.code = undefined;

    return res;
  } catch (err) {
    if (err.code === 'ERR_NETWORK') {
      return { code: err.code, message: 'Network connection error' };
    }

    if (!err.response) {
      return { code: err.code, message: err.message };
    }

    return { ...err.response.data, code: err.code, data: null };
  }
}

/**
 *
 * SIGNUP Use this to sign a user to the database
 */
export async function signup(version = 1, body) {
  if (!Number(version)) {
    throw new Error('Invalid api version specified in signup');
  }

  if (!body) {
    throw new Error('Body or Context not provided in signup');
  }

  const url = config.api_url + '/v' + version + '/signup';

  try {
    const res = await axios_instance.post(url, body);

    res.code = undefined;

    return res;
  } catch (err) {
    if (err.code === 'ERR_NETWORK') {
      return { code: err.code, message: 'No internet connection' };
    }

    if (!err.response) {
      return { code: err.code, message: err.name };
    }

    return { ...err.response.data, code: err.code };
  }
}

/**
 *
 * LOGIN Use this to log the user into server
 */
export async function login(version = 1, body) {
  if (!Number(version)) {
    throw new Error('Invalid api version specified in signup');
  }

  if (!body) {
    throw new Error('Body or Context not provided in signup');
  }

  const url = config.api_url + '/v' + version + '/signin';

  try {
    const res = await axios_instance.post(url, body);

    res.code = undefined;

    return res;
  } catch (err) {
    if (err.code === 'ERR_NETWORK') {
      return { code: err.code, message: 'No internet connection' };
    }

    if (!err.response) {
      return { code: err.code, message: err.name };
    }

    return { ...err.response.data, code: err.code };
  }
}

/**
 *
 * VERIFY EMAIL
 *
 */
export async function verify_email(version = 1, token) {
  if (!Number(version)) {
    throw new Error('Invalid api version specified in signup');
  }

  if (!token) {
    throw new Error('Token or Context not provided in verify_email');
  }

  const url = config.api_url + '/v' + version + '/email-verify/' + token;

  try {
    const res = await axios_instance.get(url);

    res.code = undefined;

    return res;
  } catch (err) {
    if (err.code === 'ERR_NETWORK') {
      return { code: err.code, message: 'No internet connection' };
    }

    if (!err.response) {
      return { code: err.code, message: err.name };
    }

    return { ...err.response.data, code: err.code };
  }
}

/**
 *
 * SIGNOUT
 *
 */
export async function signout(version = 1) {
  if (!Number(version)) {
    throw new Error('Invalid api version specified in signup');
  }

  const url = config.api_url + '/v' + version + '/signout';

  try {
    const res = await axios_instance.get(url);

    res.code = undefined;

    return res;
  } catch (err) {
    if (err.code === 'ERR_NETWORK') {
      return { code: err.code, message: 'No internet connection' };
    }

    if (!err.response) {
      return { code: err.code, message: err.name };
    }

    return { ...err.response.data, code: err.code };
  }
}

export async function reset_password(version = 1, token, body) {
  if (!Number(version)) {
    throw new Error('Invalid api version specified in signup');
  }

  const url = config.api_url + '/v' + version + '/password-reset/' + token;

  try {
    const res = await axios_instance.post(url, body);

    res.code = undefined;

    return res;
  } catch (err) {
    if (err.code === 'ERR_NETWORK') {
      return { code: err.code, message: 'No internet connection' };
    }

    if (!err.response) {
      return { code: err.code, message: err.name };
    }

    return { ...err.response.data, code: err.code };
  }
}

/**
 *
 * EMAIL APIS
 *
 */
export async function email_send_password_reset_link(version = 1, body) {
  if (!Number(version)) {
    throw new Error('Invalid api version specified in signup');
  }

  if (!body) {
    throw new Error('Body or Context not provided in signup');
  }

  const url =
    config.api_url + '/v' + version + '/email-send-password-reset-link';

  try {
    const res = await axios_instance.post(url, body);

    res.code = undefined;

    return res;
  } catch (err) {
    if (err.code === 'ERR_NETWORK') {
      return { code: err.code, message: 'No internet connection' };
    }

    if (!err.response) {
      return { code: err.code, message: err.name };
    }

    return { ...err.response.data, code: err.code };
  }
}

export default {
  axios_instance,
  get_profile,
  signup,
  login,
  signout,
  verify_email,
  reset_password,
  email_send_password_reset_link,
};

// CONFIG
import config from '../config';

/*
 * UTILS
 * Allmost none of the utility functions changes the global context. Keep the context update as minimum as possible for unintended results.
 *
 */
export async function sleep(ms = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

/*
 *
 * STR FUNCTIONS
 *
 */
export async function str_copy(str) {
  try {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(str);
    } else {
      document.execCommand('copy', true, str);
    }
  } catch (err) {}
}

export function str_remove_space(str, type) {
  if (!str) {
    return '';
  }

  let str_final = '';

  if (type === 'all') {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        continue;
      }

      str_final += str[i];
    }

    return str_final;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ' && (str[i + 1] === ' ' || !str[i + 1])) {
      continue;
    }

    if (str_final === '' && str[i] === ' ' && str[i + 1] !== ' ') {
      continue;
    }

    str_final = str_final + str[i];
  }

  return str_final;
}

export function str_type(words, interval, latency) {
  let wordsIndex = 0;
  let currentWordIndex = 0;
  let currentWord = words[wordsIndex];
  let backwardsToggle = false;
  let blinkerToggle = false;

  const configedLatency = parseInt(latency) ? parseInt(latency) : 0;

  setInterval(() => {
    blinkerToggle = !blinkerToggle;

    if (!backwardsToggle) {
      if (currentWordIndex >= currentWord.length + configedLatency) {
        backwardsToggle = !backwardsToggle;
      } else {
        currentWordIndex++;
      }
    } else {
      if (currentWordIndex < -configedLatency) {
        backwardsToggle = !backwardsToggle;

        if (wordsIndex + 1 >= words.length) {
          wordsIndex = 0;
          currentWord = words[wordsIndex];
        } else {
          wordsIndex++;
          currentWord = words[wordsIndex];
        }
      } else {
        currentWordIndex--;
      }
    }

    const displayWord = currentWord.substr(0, currentWordIndex);

    console.log(`I am a ${displayWord ? displayWord : ''}|`);
  }, interval);
}

export function str_extract_dom(data, identifier) {
  const elements = [
    // supported html elements to be extracted
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'a',
    'img',
    'div',
    'li',
    'noscript',
    'script',
    'iframe',
    'span',
  ];

  const props = [
    'id',
    'class',
    'src',
    'alt',
    'type',
    'title',
    'href',
    'loading',
  ];

  const parts = identifier.split('.');

  const element = parts[0];
  const prop = parts[1].split('=')[0];
  const value = parts[1].split('=')[1];

  const result = [];

  if (!value) {
    return null;
  }

  if (!elements.includes(element)) {
    return null;
  }

  if (!props.includes(prop)) {
    return null;
  }

  // continue if current index and rest is not the element that user provided
  let query = '<' + element + ' ';
  for (let i = 0; i < data.length; i++) {
    let read = '';

    for (let j = 0; j < query.length; j++) {
      read = read + data[i + j];
    }

    if (read !== query) {
      continue;
    }

    read = '';

    // extract whole element
    let ctr = 0;
    while (true) {
      if (
        (data[i + ctr] === '<' && data[i + ctr + 1] === '/') ||
        (data[i + ctr] === '/' && data[i + ctr + 1] === '>') ||
        (element === 'img' && data[i + ctr] === '>')
      ) {
        // read = read + data[i + ctr] + data[i + ctr + 1] + data[i + ctr + 2];

        break;
      }

      read = read + data[i + ctr];

      ctr++;
    }

    // extract element props
    const element_obj = { innerHTML: '' };

    for (let j = 0; j < props.length; j++) {
      let read_prop = '';
      let index = read.indexOf(props[j] + '="');

      if (index === -1) {
        continue;
      }

      index = index + props[j].length + 2;

      for (let k = 0; k < read.length; k++) {
        if (read[index + k] === '"') {
          break;
        }

        read_prop = read_prop + read[index + k];
      }

      element_obj[props[j]] = read_prop;
    }

    for (let j = read.indexOf('>') + 1; j < read.length; j++) {
      if (!read[j]) {
        break;
      }

      if (read[j] === '<') {
        break;
      }

      element_obj.innerHTML = element_obj.innerHTML + read[j];
    }

    result.push(element_obj);
  }

  const final = [];

  for (let i = 0; i < result.length; i++) {
    if (result[i][prop] === value) {
      final.push(result[i]);
    }
  }

  return final;
}

export default {
  sleep,
  str_copy,
  str_remove_space,
  str_type,
  str_extract_dom,
};

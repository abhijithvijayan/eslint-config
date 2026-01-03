/**
 *  @abhijithvijayan/eslint-config
 *
 *  Shared ESLint & Prettier configuration for projects
 *  ESLint v9 flat config format
 *
 *  @author   abhijithvijayan <https://abhijithvijayan.in>
 *  @license  MIT License
 */

import javascript from './javascript.js';
import typescript from './typescript.js';
import react from './react.js';
import node from './node.js';

export {javascript, typescript, react, node};

// Default export is the JavaScript config
export default javascript;

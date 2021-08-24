import {produce, enableES5} from 'immer';

export default (...argus) => {
  enableES5();
  return produce(...argus);
};

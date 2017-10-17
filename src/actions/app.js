import { APP_LOAD, APP_INFO } from 'constants/action-types';

export function loadApp() {
  return {
    type: APP_LOAD,
  };
}

export function saveInfo(info) {
  return {
    type: APP_INFO, info: info
  };
}

export default { loadApp, saveInfo };

import {
  SET_ACTIVE_SECTION,
  SET_BROWSER_PATH,
  SET_CAROUSEL_INDEX,
} from './constants';

export function setActiveSection(section) {
  return {
    type: SET_ACTIVE_SECTION,
    payload: section,
  };
}

export function setBrowserPath(path) {
  return {
    type: SET_BROWSER_PATH,
    payload: path,
  };
}

export function setCarouselIndex(idx) {
  return {
    type: SET_CAROUSEL_INDEX,
    payload: idx,
  };
}

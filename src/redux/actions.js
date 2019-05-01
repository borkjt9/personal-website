import {
  SET_ACTIVE_SECTION,
  SET_BROWSER_PATH,
  SET_CAROUSEL_INDEX,
  SET_HEADER_IS_TOP_BAR,
  SET_TOP_BAR_FIXED,
  SET_EXPAND_CAROUSEL,
  SET_CLEAR_CAROUSEL,
  SET_IS_DESKTOP,
  RESET_STATE,
} from './constants';

export function resetState() {
  return {
    type: RESET_STATE,
  };
}

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

export function setExpandCarousel(shouldExpand) {
  return {
    type: SET_EXPAND_CAROUSEL,
    payload: shouldExpand,
  };
}

export function setIsDesktop(isDesktop) {
  return {
    type: SET_IS_DESKTOP,
    payload: isDesktop,
  };
}

export function setClearCarousel(shouldClear) {
  return {
    type: SET_CLEAR_CAROUSEL,
    payload: shouldClear,
  };
}
export function setHeaderIsTopBar(isTopBar) {
  return {
    type: SET_HEADER_IS_TOP_BAR,
    payload: isTopBar,
  };
}
export function setTopBarFixed(isFixed) {
  return {
    type: SET_TOP_BAR_FIXED,
    payload: isFixed,
  };
}

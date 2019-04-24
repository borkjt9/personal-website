import {
  SET_BROWSER_PATH,
  SET_ACTIVE_SECTION,
  SET_CAROUSEL_INDEX,
  SET_TOP_BAR_FIXED,
  SET_EXPAND_CAROUSEL,
  RESET_STATE,
  SET_CLEAR_CAROUSEL,
} from './constants';

const initialState = {
  browserPath: 'home',
  carouselIndex: 0,
  activeSection: 'about',
  expandCarousel: false,
  topBarFixed: false,
  clearCarousel: true,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE:
      return { ...initialState };
    case SET_BROWSER_PATH:
      return { ...state, ...{ browserPath: action.payload } };
    case SET_ACTIVE_SECTION:
      return { ...state, ...{ activeSection: action.payload } };
    case SET_CAROUSEL_INDEX:
      return { ...state, ...{ carouselIndex: action.payload } };
    case SET_TOP_BAR_FIXED:
      return { ...state, ...{ topBarFixed: action.payload } };
    case SET_EXPAND_CAROUSEL:
      return { ...state, ...{ expandCarousel: action.payload } };
    case SET_CLEAR_CAROUSEL:
      return { ...state, ...{ clearCarousel: action.payload } };
    default:
      return state;
  }
}

export default reducer;

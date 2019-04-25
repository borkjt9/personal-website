import {
  SET_BROWSER_PATH,
  SET_ACTIVE_SECTION,
  SET_CAROUSEL_INDEX,
  SET_TOP_BAR_FIXED,
  SET_EXPAND_CAROUSEL,
  RESET_STATE,
  SET_CLEAR_CAROUSEL,
  SET_HEADER_IS_TOP_BAR,
} from './constants';

const initialState = {
  browserPath: 'home',
  carouselIndex: 0,
  activeSection: 'about',
  expandCarousel: false,
  topBarFixed: false,
  clearCarousel: true,
  headerIsTopBar: false,
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
    case SET_HEADER_IS_TOP_BAR:
      return { ...state, ...{ headerIsTopBar: action.payload } };
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

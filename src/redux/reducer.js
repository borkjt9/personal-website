import {
  SET_BROWSER_PATH,
  SET_ACTIVE_SECTION,
  SET_CAROUSEL_INDEX,
} from './constants';

const initialState = {
  browserPath: 'home',
  carouselIndex: 0,
  activeSection: 'about',
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_BROWSER_PATH:
      return { ...state, ...{ browserPath: action.payload } };
    case SET_ACTIVE_SECTION:
      return { ...state, ...{ activeSection: action.payload } };
    case SET_CAROUSEL_INDEX:
      return { ...state, ...{ carouselIndex: action.payload } };
    default:
      return state;
  }
}

export default reducer;

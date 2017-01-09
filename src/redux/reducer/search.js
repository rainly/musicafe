/*
 * searchResult: {
 *   song: {
 *     netease: [],
 *     qq: [],
 *   },
 *   artist: {},
 *   album: {},
 *   playlist: {},
 * }
 */
const searchResultInitState = {
  song: {},
  artist: {},
  album: {},
  playlist: {}
}

const searchKeyInitState = {
  key: null,
  type: 'song',
}

export const searchKey = (state = searchKeyInitState, action) => {
  switch (action.type) {
    case 'SEARCH_KEY_UPDATE_KEY':
      return {...state, key: action.key}
    case 'SEARCH_KEY_UPDATE_TYPE':
      return {...state, type: action.type}
    default:
      return state;
  }
}

export const searchResult = (state = searchResultInitState, action) => {
  switch (action.type) {
    case 'SEARCH_RESULT_UPDATE_SONG':
      return {
        ...state,
        song: {
          ...state.song,
          [action.vendor]: action.data
        }
      };
    case 'SEARCH_RESULT_UPDATE_ARTIST':
      return {
        ...state,
        artist: action.data
      };
    case 'SEARCH_RESULT_UPDATE_ALBUM':
      return {
        ...state,
        album: action.data
      };
    case 'SEARCH_RESULT_UPDATE_PLAYLIST':
      return {
        ...state,
        playlist: action.data
      };
    case 'SEARCH_RESULT_CLEAR':
      return {
        ...state,
        [action.t]: {}
      }
    default:
      return state;
  }
}
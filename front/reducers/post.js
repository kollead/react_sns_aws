import shortid from 'shortid';
import produce from 'immer';

export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '01',
    },
    content: 'first content #first #content',
    Images: [{
      src: 'https://64.media.tumblr.com/8688f176d0167d668fbc9750ff073824/bc6d6432604e5468-9d/s2048x3072/47d2d8df5f150f6e4cf38a83dc410e298d2490f8.png',
    },
    {
      src: 'https://64.media.tumblr.com/a42d9b563516bb893a8dac4628e62797/6ae9d73862ac638e-12/s2048x3072/063476d81525dbe411150e77944da0b7712bf974.png',
    },
    {
      src: 'https://64.media.tumblr.com/08a193b5577ba6e9a921605b7e698e5d/5baeef4540e82612-c6/s2048x3072/5521390db472cb1cd9048b590bfb8274f9eb0cb2.png',
    },
    {
      src: 'https://64.media.tumblr.com/a58a2b497ffb0d5d9a555fcfd5359293/b8dde5739efda089-b1/s2048x3072/6346221089420ddae7969d0b7d86ad04b495ff9a.png',
    }],
    Comments: [{
      id: shortid.generate(),
      User: {
        id: shortid.generate(),
        nickname: '02',
      },
      content: 'first comments',
    }],
  }],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
};

const dummyPost = (data) => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: '01',
  },
  Images: [],
  Comments: [],
});

const dummyComment = (data) => ({
  id: shortid.generate(),
  content: data,
  User: {
    id: 1,
    nickname: '01',
  },
  Images: [],
});

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const addPost = (data) => ({
  type: ADD_POST_REQUEST, data,
});
export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST, data,
});
export const removePost = (data) => ({
  type: REMOVE_POST_REQUEST, data,
});

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;
    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.mainPosts = [dummyPost(action.data), ...state.mainPosts];
      break;
    case ADD_POST_FAILURE:
      return {...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS: {
      const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
      const post = {...state.mainPosts[postIndex]};
      post.Comments = [dummyComment(action.data.content), ...post.Comments];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = post;
      return {
        ...state,
        mainPosts,
        addCommentLoading: false,
        addCommentDone: true,
      };
    }
    case ADD_COMMENT_FAILURE:
      return {...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    case REMOVE_POST_REQUEST:
      return {
        ...state,
        removePostLoading: true,
        removePostDone: false,
        removePostError: null,
      };
    case REMOVE_POST_SUCCESS:
      return {
        ...state,
        mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
        removePostLoading: false,
        removePostDone: true,
      };
    case REMOVE_POST_FAILURE:
      return {...state,
        removePostLoading: false,
        removePostError: action.error,
      };
    default:
      return state;
  }
});

export default reducer;

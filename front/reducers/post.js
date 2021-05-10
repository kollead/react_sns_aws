export const initialState = {
    mainPosts:[{
        id: 1,
        User: {
            id: 1,
            nickname: "01" 
        },
        content: 'first content',
        Images:[{
            src: "https://64.media.tumblr.com/a42d9b563516bb893a8dac4628e62797/6ae9d73862ac638e-12/s2048x3072/063476d81525dbe411150e77944da0b7712bf974.png"
        }],
        Comments: [{
            User: {
                nickname: "02"
            },
            content: "first comments"
        }],
        imagePaths: [],
        postAdded: false
    }]
}

const ADD_POST = "ADD_POST"
export const addPost = (data) => {
    return {type: ADD_POST, data}
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST : 
            return {...state, content: action.data};
        default:
            return state;
    }
}

export default reducer;
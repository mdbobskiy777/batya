import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    //1. test data
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'joke', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
};
it('length of posts should be incremented',()=>{

    //2. action

    let action =  addPost("hi everyone")
    let newState = profileReducer(state,action)

    //3. expectation
    expect(newState.posts.length).toBe(5)
})

it("post [4].message should be 'hi everyone'",()=>{
    let action = addPost('hi everyone')
    let newState = profileReducer(state, action)
    expect(newState.posts[4].message).toBe('hi everyone')
})

it("after deleting length of [posts] should dectement",()=>{

    let action = deletePost(1);

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})

it("after deleting length shouldn`t be decremented if index is incorrect",()=> {
    let action = deletePost(100000)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
})
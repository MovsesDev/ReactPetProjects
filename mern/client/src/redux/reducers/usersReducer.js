const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    users: []
}

const usersReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})


export default usersReducer
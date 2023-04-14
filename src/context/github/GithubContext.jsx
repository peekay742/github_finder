import { createContext,useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext()

const GTIHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initialState = {
        user: []
    }
    const [state,dispatch] = useReducer(githubReducer,initialState)
    const searchUsers = async(text)=>{
        const params = new URLSearchParams({
            q: text
        })
        const response = await fetch(`${GTIHUB_URL}/search/users?${params}`,{
            headers:{
                Authorization: `token ${GITHUB_TOKEN}`,
            }
        })
        const {items} = await response.json()
        dispatch({
            type: 'GET_USERS',
            payload: items
        })
        // setUser(data)
        // setLoading(false)
    }
    // const fetchUsers = async()=>{
    //     const response = await fetch(`${GTIHUB_URL}/users`,{
    //         headers:{
    //             Authorization: `token ${GITHUB_TOKEN}`,
    //         }
    //     })
    //     const data = await response.json()
    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: data
    //     })
    //     // setUser(data)
    //     // setLoading(false)
    // }
    return <GithubContext.Provider value={{
        users: state.user,
        searchUsers,
    }}>
        {children}
    </GithubContext.Provider>
}
export default GithubContext
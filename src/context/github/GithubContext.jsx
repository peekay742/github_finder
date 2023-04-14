import { createContext,useState } from "react";
const GithubContext = createContext()

const GTIHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const [users,setUser] = useState([])
    const fetchUsers = async()=>{
        const response = await fetch(`${GTIHUB_URL}/users`,{
            headers:{
                Authorization: `token ${GITHUB_TOKEN}`,
            }
        })
        const data = await response.json()
        setUser(data)
        // setLoading(false)
    }
    return <GithubContext.Provider value={{
        users,
        fetchUsers,
    }}>
        {children}
    </GithubContext.Provider>
}
export default GithubContext
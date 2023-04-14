import UserResults from "../components/layout/users/UserResults"
import UserSearch from "../components/layout/users/UserSearch"
function Home() {
  return (
    <div>
      <UserSearch />
      <UserResults />
      {/* <h1 className="">Welcome</h1>
      {process.env.REACT_APP_GITHUB_TOKEN} */}
    </div>
  )
}

export default Home

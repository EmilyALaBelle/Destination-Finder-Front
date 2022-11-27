import { Link } from "react-router-dom"
import { Button } from "antd"

export default function Profile() {
  return (
    <div>
    <h1>Profile</h1>
    <Link to={"/account"}>
    <Button type='button'>
      Account
    </Button>
    </Link>
    <br />
    <Link to={"/favorites"}>
    <Button type='button'>
      Favorites
    </Button>
    </Link>
    <br />
    <Link to={"/signout"}>
    <Button type='button'>
      Signut
    </Button>
    </Link>
    </div>
  )
}
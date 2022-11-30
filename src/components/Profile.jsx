import { Link } from "react-router-dom"
import { Button } from "antd"

export default function Profile() {
  return (
    <div>
    <div>
    <h1>Profile</h1>
    <Link to={"/account"}>
    <Button type='button'>
      Account
    </Button>
    </Link>
    </div>
    <br />
    <div>
    <Link to={"/favorites"}>
    <Button type='button'>
      Favorites
    </Button>
    </Link>
    </div>
    <br />
    <div>
    <Link to={"/signout"}>
    <Button type='button'>
      Signout
    </Button>
    </Link>
    </div>
    <br />
    <div>
    <Link to={"/login"}>
    <Button type='button'>
      Login
    </Button>
    </Link>
    </div>
    <br />
    <div>
    <Link to={"/signup"}>
    <Button type='button'>
      Signup
    </Button>
    </Link>
    </div>
    </div>
  )
}
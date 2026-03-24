import { useEffect, useState } from "react"
import Header from './layout/Header'

function Login() {

    const [ users, setUsers ] = useState([])

    useEffect(() => {
        fetch('/api/login')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error(`Error: ${error}`))
    }, [])

    function UserName() {
            if (users.length > 0) {
            return <div>Hello {users[0].name}</div>
        }
    }

    return (
         <div className="flex items-center h-screen">
            <div className="flex items-center border border-black w-50 mx-auto">
                <form action="submit" method="post" className="flex flex-col w-full">

                    <input type="text"
                    name="username"
                    placeholder="Enter username"
                    className="border-black"/>

                    <input type="text"
                    name="password"
                    placeholder="Enter password"/>

                    <button type="submit">Login</button>

                </form>
            </div>
        </div>
    )
}

export default Login
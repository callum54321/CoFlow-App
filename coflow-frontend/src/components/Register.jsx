function Register() {
    return (
        <div className="flex items-center h-screen">
            <div className="flex items-center border border-black w-50 mx-auto">
                <form action="submit" method="post" className="flex flex-col w-full">

                    <input type="text"
                    name="username"
                    placeholder="Enter username"
                    className="border-black"/>

                    <input type="password"
                    name="password"
                    placeholder="Enter password"/>

                    <button type="submit">Register</button>

                </form>
            </div>
        </div>
    )
}

export default Register
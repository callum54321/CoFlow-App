import { Link } from 'react-router-dom'

function SignIn() {
    return (
    <div>
        <form action="submit" className="max-w-md m-auto pt-24 text-black border">
            Sign up
        </form>
        <p className='text-black'>Already have an account?
            <Link to="/signin">Sign in</Link></p>
    </div>
    )
}

export default SignIn
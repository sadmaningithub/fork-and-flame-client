import { useEffect, useState } from "react";
import { Link } from "react-router";


const NavBar = () => {

    const [theme, setTheme] = useState('light')

    const navOptions = <>
        <li><Link to='/'> Home </Link></li>
        <li><Link to='/menu'> Menu </Link></li>
        <li><Link to='/shop'> Shop </Link></li>
        <li><Link to='/about'> About Us </Link></li>
        <li><Link to='/contact'> Contact </Link></li>
    </>

    const handleTheme = () => { 
        setTheme(theme === 'light' ? 'dark' : 'light')
        localStorage.setItem()
        // console.log(theme);
    }

    useEffect(() => {
        if (theme === 'light') {
            document.querySelector('html').setAttribute('data-theme', theme)
        }
        else {
            document.querySelector('html').setAttribute('data-theme', theme)
        }
    }, [theme])

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold">Fork & Flame</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <select onChange={handleTheme} defaultValue="light" className="select select-ghost">
                        <option value={'light'}>Light</option>
                        <option value={'dark'}>Dark</option>
                    </select>
                    <Link to='/signup'> <button className="btn mr-2">Sign up</button> </Link>
                    <Link to='/login'> <button className="btn">Login</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
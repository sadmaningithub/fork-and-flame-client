import { ArrowLeftToLine, CalendarCheck, Clipboard, ConciergeBell, House, IdCardLanyard, Settings, UsersRound } from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router";

const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(true);

    const navItems = [
        { name: 'Home', path: '/', icon: <House /> },
        { name: 'Orders', path: 'orders', icon: <ConciergeBell /> },
        { name: 'Reservations', path: 'reservations', icon: <CalendarCheck /> },
        { name: 'Customers', path: 'customers', icon: <UsersRound /> },
        { name: 'Stuffs', path: 'stuffs', icon: <IdCardLanyard /> },
        { name: 'Reports', path: 'reports', icon: <Clipboard /> },
        { name: 'Settings', path: 'settings', icon: <Settings /> },

    ]

    // const toggleSideBar = () => {
    //     setIsOpen(!isOpen)
    //     console.log(isOpen);
    // }
    // console.log(isOpen);

    return (
        <div className="flex flex-row">

            <div className={` ${isOpen? 'w-64' : 'w-16'}  bg-amber-200 transition-all duration-300 h-screen p-5`}>

                <div className="flex flex-row justify-between">
                    <h1>Fork & Flame</h1>
                    <button onClick={() => setIsOpen(!isOpen)} className="btn"><ArrowLeftToLine /></button>
                </div>

                <aside className="">
                    {
                        navItems.map((navItem, index) => <NavLink key={index} to={navItem.path}> <span className="flex flex-row gap-2 mb-5 "> {navItem.icon} { isOpen && <span>{navItem.name}</span> } </span> </NavLink>)
                    }
                </aside>

                <div>

                </div>

            </div>

            <div>
                <Outlet></Outlet>
            </div>

            
        </div>
    );
};

export default Dashboard;
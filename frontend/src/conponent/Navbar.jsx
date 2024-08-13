import React, { useEffect, useState } from 'react';

function Navbar() {
    // Load the initial theme from localStorage or default to "light"
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });
    const [isSidebarVisible, setSidebarVisible] = useState(false); // State for sidebar visibility

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        // Save the theme to localStorage
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('rol');
        localStorage.removeItem('names');
        window.location.href = "/"; // Redirect to login page
    
      };

    return (
        <div>
            <nav className="fixed top-0 z-50 w-full bg-gray-700 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="py-3 px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-between space-x-10 rtl:justify-end">

                            <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center  ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span class="sr-only">Open sidebar</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="#" className="flex ms-2 md:me-24">
                                <span className="self-center text-xl text-white font-bold sm:text-2xl whitespace-nowrap dark:text-white">POS Coffee</span>
                            </a>
                            <button
                                className="bg-slate-200 rounded-3xl p-1"
                                onClick={handleThemeSwitch}
                            >
                                {theme === "dark" ? (
                                    <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/ffffff/sun--v1.png" alt="light mode icon" />
                                ) : (
                                    <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/000000/moon-symbol.png" alt="dark mode icon" />
                                )}
                            </button>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <div>
                                    <button type="button" className="flex text-sm bg-gray-800 shadow-lg border-2 border-rose-600 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full shadow-md" src="https://cdn.vectorstock.com/i/2000v/07/94/modern-coffee-shop-logo-design-vector-37280794.avif" alt="user photo" />
                                    </button>
                                </div>
                                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                    <div className="px-4 py-3" role="none">
                                        <p className="text-sm text-gray-900 font-bold" role="none">
                                            {/* PHP logic or similar to display username */}name
                                        </p>
                                    </div>
                                    <ul className="py-1" role="none">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="/"  onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="sidebar-multi-level-sidebar" class="fixed top-12 left-0 z-40 w-64 h-screen transition-transform -translate-x-full lg:translate-x-0" aria-label="Sidebar">

                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-700 shadow-2xl dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="/" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="w-5 h-5 text-white hover:text-gray-700 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3 hover:text-gray-700 text-white">Dashboard</span>
                            </a>
                        </li>
                        {/* Additional links */}
                    </ul>

                </div>
            </aside>

            {/* <div className='pt-16 p-2 2xl:ml-64 bg-white dark:bg-gray-900'>
                <div className='p-2 border-2 border-gray-200 rounded-lg dark:border-gray-700'>
                    <div className='flex justify-between py-2 mr-2 md:mr-14'>
                        <div className='my-2'>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-2 bg-slate-100 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500" placeholder="Search Mockups, Logos..." required />
                        </div>
                    </div>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="pl-4 py-3">ID</th>
                                    <th scope="col" className="px-6 py-3">Product name</th>
                                    <th scope="col" className="px-6 py-3">Color</th>
                                    <th scope="col" className="px-6 py-3">Category</th>
                                    <th scope="col" className="px-6 py-3">Category</th>
                                    <th scope="col" className="px-6 py-3">Category</th>
                                    <th scope="col" className="px-6 py-3">Price</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100">
                                    <td className='pl-4 py-3'>1</td>
                                    <td className="px-6 font-semibold">Silver</td>
                                    <td className="px-6">Silver</td>
                                    <td className="px-6">Silver</td>
                                    <td className="px-6">Silver</td>
                                    <td className="px-6">Laptop</td>
                                    <td className="px-6">$2999</td>
                                    <td className="px-6 space-x-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Update</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Navbar;

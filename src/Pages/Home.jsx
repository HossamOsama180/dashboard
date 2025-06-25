import React from 'react'
import Chart2 from '../Component/Chart2'
import Chart from '../Component/Chart'
import SideBar from '../Component/SideBar'
// import {Chart ,Chart2} from './Component/Chart';
const Home = () => {
    return (
        <>
            <div className="min-h-screen flex bg-[#f5f5f5] overflow-hidden">
                {/* Sidebar */}

                <SideBar />
                {/* Main Content */}
                <div className="flex-1 flex flex-col">
                    {/* Navbar */}
                    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                        <input
                            type="text"
                            placeholder="Search here"
                            className="w-1/2 border px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                        />
                        <div className="flex items-center gap-4">
                            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-sm">
                                Filter Period
                            </button>
                            <span className="text-gray-700">Hello, <strong>Samantha</strong></span>
                            <img
                                src="https://i.pravatar.cc/150?img=3"
                                className="w-9 h-9 rounded-full border"
                                alt="Profile"
                            />
                        </div>
                    </div>

                    {/* باقي الصفحة */}
                    <div className="p-4">
                        {/* Dashboard Cards */}
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">Total Orders</h3>
                                <p className="text-2xl mt-2">75</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">Total Delivered</h3>
                                <p className="text-2xl mt-2">357</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">Total Revenue</h3>
                                <p className="text-2xl mt-2">$128</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">Total Revenue</h3>
                                <p className="text-2xl mt-2">$128</p>
                            </div>
                        </div>

                        {/* Charts Section */}
                        <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {/* Single Chart */}
                            <div className="bg-white p-4 rounded-lg shadow">
                                <Chart />
                            </div>

                            {/* Multiple Charts */}
                            <div className="bg-white p-4 rounded-lg shadow">
                                {/* Use grid for responsiveness */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="p-2">
                                        <Chart2 />
                                    </div>
                                    <div className="p-2">
                                        <Chart2 />
                                    </div>
                                    <div className="p-2">
                                        <Chart2 />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home

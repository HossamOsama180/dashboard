import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div>
            <aside className="w-60 bg-white p-6 shadow-md h-screen">
                <h2 className="text-2xl font-bold text-green-600 mb-8">Sedap.</h2>
                <ul className="space-y-3 text-gray-700">
                    <li><a href="/" className="block px-3 py-2 rounded hover:bg-green-100">Dashboard</a></li>
                    <li><Link to="/order" className="block px-3 py-2 hover:bg-green-100 rounded">Order List</Link></li>
                    <li><Link to="/customer" className="block px-3 py-2 rounded hover:bg-green-100">Customer</Link></li>
                    <li><Link to="/Review" className="block px-3 py-2 rounded hover:bg-green-100">Reviews</Link></li>
                    <li><a href="#" className="block px-3 py-2 rounded hover:bg-green-100">Foods</a></li>
                    <li><a href="#" className="block px-3 py-2 rounded hover:bg-green-100">Chat</a></li>
                </ul>
            </aside>
        </div>
    )
}

export default SideBar

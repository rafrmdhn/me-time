import React, { useState } from "react";
import Sidebar from "../../components/admin/sidebar";
import Navbar from "../../components/admin/navbaradmin";
import Dashboard from "../../components/admin/dashboard";
import Footer from "../../components/admin/footeradmin";


const DashboardPage = () => {
    const [selectedItem, setSelectedItem] = useState("dashboard");

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
    };
    return (
        <div className="min-h-screen bg-gray-50/50">
            <Sidebar selectedItem={selectedItem} onItemClick={handleItemClick} />
            <div className="p-4 xl:ml-80">
                <Navbar selectedItem={selectedItem}/>
                <Dashboard />
                <Footer />
            </div>
        </div>
    );
};

export default DashboardPage;
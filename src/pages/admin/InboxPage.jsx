import React, { useState }from "react";
import Sidebar from "../../components/admin/sidebar";
import Navbar from "../../components/admin/navbaradmin";
import Inbox from "../../components/admin/inbox";
import Footer from "../../components/admin/footeradmin";

const InboxPage = () => {
    const [selectedItem, setSelectedItem] = useState("Inbox");

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    return (
        <div className="min-h-screen bg-gray-50/50">
            <Sidebar selectedItem={selectedItem} onItemClick={handleItemClick} />
            <div className="p-4 xl:ml-80">
                <Navbar selectedItem={selectedItem}/>
                <Inbox />
                <Footer />
            </div>
        </div>
    );
};

export default InboxPage;
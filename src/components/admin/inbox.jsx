import React, { useState, useEffect } from "react";

const userData = [
    {
        id: 1,
        namadepan: "Rafi",
        namabelakang: "Ramadhan",
        email: "ramadhanrafi871@gmail.com",
        pesan: "Saya merasa sehatwalafiat.",
        timeAgo: "23m ago",
        image: "",
    },
    {
        id: 2,
        namadepan: "Akhil",
        namabelakang: "Gautam",
        email: "akhil.gautam123@gmail.com",
        pesan: "Saya merasa diri selalu mengalami depresi jika menerima masalah.",
        timeAgo: "23m ago",
        image: "https://bit.ly/2KfKgdy",
    },
];

const Inbox = () => {
    const [activeMessage, setActiveMessage] = useState(null);
    const [replyText, setReplyText] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredMessages, setFilteredMessages] = useState(userData);

    const handleItemClick = (data) => {
        setActiveMessage(data);
    };

    const handleReplyChange = (event) => {
        setReplyText(event.target.value);
    };

    const handleReplySubmit = () => {
        console.log("Reply submitted:", replyText);
        setReplyText("");
    };

    useEffect(() => {
        const filtered = userData.filter((data) =>
            data.namadepan.toLowerCase().includes(searchQuery.toLowerCase()) ||
            data.namabelakang.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredMessages(filtered);
    }, [searchQuery]);

    return (
        <main class="flex w-full h-full shadow-lg">
            <section class="flex flex-col pt-3 w-4/12 bg-gray-50 h-full overflow-y-scroll">
            <label class="px-3">
                <input class="rounded-lg p-4 bg-gray-100 transition duration-200 focus:outline-none focus:ring-2 w-full"
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
            </label>
            <ul className="mt-6">
                {filteredMessages.map((data) => (
                        <li
                            key={data.id}
                            className={`py-5 border-b px-3 transition hover:bg-indigo-100 ${
                                activeMessage && activeMessage.id === data.id ? "bg-indigo-100" : ""
                            }`}
                        >
                            <a
                                href="#"
                                className="flex justify-between items-center"
                                onClick={() => handleItemClick(data)}
                            >
                                <h3 className="text-lg font-semibold">{data.namadepan} {data.namabelakang}</h3>
                                <p className="text-md text-gray-400">{data.timeAgo}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
            <section class="w-full px-4 flex flex-col bg-white"> 
                {activeMessage ? (
                <>           
                <div class="flex justify-between items-center h-48 border-b-2 mb-8">
                    <div class="flex space-x-4 items-center">
                    <div class="h-12 w-12  overflow-hidden">
                        <img src={activeMessage?.image} loading="lazy" class="h-full w-full object-cover" />
                    </div>
                    <div class="flex flex-col">
                        <h3 class="font-semibold text-lg text-left">{activeMessage?.namadepan} {activeMessage?.namabelakang}</h3>
                        <p class="text-light text-gray-400">{activeMessage?.email}</p>
                    </div>
                    </div>
                    <div>
                    <ul class="flex text-gray-400 space-x-4">
                        <button>
                            <li class="w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                            </svg>
                            </li>
                        </button>
                        <button>
                            <li class="w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            </li>
                        </button>
                        <button>
                            <li class="w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            </li>
                        </button>
                    </ul>
                    </div>
                </div>
                <section>
                    <article class="mt-8 text-gray-500 leading-7 tracking-wider">
                        <p>{activeMessage.pesan}</p>
                    </article>
                    <div className="mt-6 border rounded-xl bg-gray-50 mb-3">
                        <textarea className="w-full bg-gray-50 p-2 rounded-xl" placeholder="Type your reply here..." rows="3"
                            value={replyText} onChange={handleReplyChange}
                        />
                        <div className="flex items-center justify-between p-2">
                            <button className="h-6 w-6 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                            </button>
                            <button className="bg-purple-600 text-white px-6 py-2 rounded-xl" onClick={handleReplySubmit}>
                                Reply
                            </button>
                        </div>
                    </div>
                </section>
                </>
                ) : (
                    <p className="text-gray-500">No message selected</p>
                )}
            </section>
        </main>
    );
};

export default Inbox;
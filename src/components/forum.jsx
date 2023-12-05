import React, { useState } from "react";
import ForumItem from "./forumItem"; 
import NewDiscuss from "./newdiscuss";

const userData = [
    {
        idForum: 1,
        id: 1,
        namadepan: "Rafi",
        namabelakang: "Ramadhan",
        judul: "Stress",
        createdAt: "22h ago",
        textforum:
        "Saya mengalami burnout yang tidak bisa dikendalikan, apakah ada yang mengalami hal yang sama?",
        comments: [
            {
              id: 1,
              namadepan: "John",
              namabelakang: "Doe",
              createdAt: "20h ago",
              textcomment: "Saya juga pernah mengalami hal yang serupa."
            },
        ]
    },
    {
        idForum: 2,
        id: 2,
        namadepan: "Si",
        namabelakang: "Ganteng",
        judul: "Burnout",
        createdAt: "22h ago",
        textforum:
        "Saya mengalami burnout yang tidak bisa dikendalikan, apakah ada yang mengalami hal yang sama?",
    },
];

const Forum = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    
    return (
        
      <div className="flex flex-col mx-4 md:mx-auto my-8 max-w-md md:max-w-2xl">
        <form className="mb-5">
            <div class="flex">
                <button disabled={isModalOpen} onClick={openModal} data-modal-target="crud-discuss" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-black border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 shadow-md" type="button">
                    Buat Diskusi Baru
                </button>
                <div class="relative w-full">
                    <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-black bg-transparent shadow-md rounded-e-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Cari Forum Diskusi..."/>
                    <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-violet-600 rounded-e-lg border border-blue-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span class="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
        {userData.map((user) => (
          <ForumItem key={user.idForum} user={user} />
        ))}
        {isModalOpen && <NewDiscuss closeModal={closeModal} />}
      </div>
    );
};

export default Forum;
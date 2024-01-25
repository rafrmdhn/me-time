import React, { useState, useEffect } from "react";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useHistory } from "react-router-dom";
import { id } from "date-fns/locale";
import axios from "axios";

const Inbox = () => {
  const [activeMessage, setActiveMessage] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [userData, setUserData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const localStorageKey = localStorage.getItem("AdminKey");
    if (!localStorageKey) {
      history.push("/admin/Login");
    }
  });

  const fetchData = async () => {
    try {
      const messageResponse = await axios.get(
        "http://195.35.8.190:4000/api/messages"
      );
      const messages = messageResponse.data.data;

      const userResponse = await axios.get(
        "http://195.35.8.190:4000/api/users"
      );
      const users = userResponse.data.data;

      const formattedData = messages.map((item) => {
        const user = users.find((u) => u.id === item.userId);
        return {
          id: item.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          image: user.image,
          createdAt: item.createdAt,
          timeAgo: formatDistanceToNow(parseISO(item.createdAt), {
            addSuffix: true,
            locale: id,
          }),
          message: item.message,
        };
      });
      setUserData(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    const filtered =
      searchQuery !== ""
        ? userData.filter(
            (data) =>
              data.firstName
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
              data.lastName.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : userData;

    setFilteredMessages(filtered);
  }, [searchQuery, userData]);

  return (
    <main className="flex w-full h-full shadow-lg">
      <section className="flex flex-col pt-3 w-4/12 bg-gray-50 h-full overflow-y-scroll">
        <label className="px-3">
          <input
            className="rounded-lg p-4 bg-gray-100 transition duration-200 focus:outline-none focus:ring-2 w-full"
            placeholder="Cari.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
        <ul className="mt-6">
          {filteredMessages.map((data) => (
            <li
              key={data.id}
              className={`py-5 border-b px-3 transition hover:bg-indigo-100 ${
                activeMessage && activeMessage.id === data.id
                  ? "bg-indigo-100"
                  : ""
              }`}
            >
              <a
                href="#"
                className="flex justify-between items-center"
                onClick={() => handleItemClick(data)}
              >
                <h3 className="text-lg font-semibold">
                  {data.firstName} {data.lastName}
                </h3>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="w-full px-4 flex flex-col bg-white justify-center">
        {activeMessage ? (
          <>
            <div className="flex justify-between items-center h-48 border-b-2 mb-8">
              <div className="flex space-x-4 items-center">
                <div className="h-12 w-12  overflow-hidden">
                  <img
                    src={activeMessage?.image}
                    loading="lazy"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg text-left">
                    {activeMessage?.firstName} {activeMessage?.lastName}
                  </h3>
                  <p className="text-light text-gray-400">
                    {activeMessage?.email}
                  </p>
                </div>
              </div>
              <div>
                <ul className="flex text-gray-400 space-x-4">
                  <p className="text-md text-gray-400">
                    {activeMessage?.timeAgo}
                  </p>
                  <button>
                    <li class="w-6 h-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                        />
                      </svg>
                    </li>
                  </button>
                  <button>
                    <li className="w-6 h-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </li>
                  </button>
                  <button>
                    <li className="w-6 h-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </li>
                  </button>
                </ul>
              </div>
            </div>
            <section>
              <article className="mt-8 text-gray-500 leading-7 tracking-wider">
                <p>{activeMessage.message}</p>
              </article>
              <div className="mt-6 border rounded-xl bg-gray-50 mb-3">
                <textarea
                  className="w-full bg-gray-50 p-2 rounded-xl"
                  placeholder="Type your reply here..."
                  rows="3"
                  value={replyText}
                  onChange={handleReplyChange}
                />
                <div className="flex items-center justify-between p-2">
                  <button className="h-6 w-6 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      />
                    </svg>
                  </button>
                  <button
                    className="bg-purple-600 text-white px-6 py-2 rounded-xl"
                    onClick={handleReplySubmit}
                  >
                    Balas
                  </button>
                </div>
              </div>
            </section>
          </>
        ) : (
          <p className="text-gray-500">Tidak ada pesan yang dipilih</p>
        )}
      </section>
    </main>
  );
};

export default Inbox;

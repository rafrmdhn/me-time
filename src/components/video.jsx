import React, { useEffect, useState } from "react";
import axios from "axios";

const Video = () => {
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    // Ganti 'YOUR_API_KEY' dengan kunci API YouTube Anda
    const apiKey = "AIzaSyAynzpllx7wIMrSL9ABbBwoRDb6UFJN8MM";
    const apiUrl = "https://www.googleapis.com/youtube/v3";

    // Ganti 'YOUR_SEARCH_QUERY' dengan query pencarian Anda
    const searchQuery = "Mengubah Stigma Kesehatan Mental bersama Ubah Stigma";

    axios.get(`${apiUrl}/search`, {
      params: {
        part: "snippet",
        maxResults: 1,
        key: apiKey,
        q: searchQuery,
        type: "video",
      },
    })
    .then(response => {
      const firstVideoId = response.data.items[0].id.videoId;
      setVideoId(firstVideoId);
    })
    .catch(error => {
      console.error("Error fetching video:", error);
    });
  }, []);

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl sm:text-center gap-3 sm:flex-row  items-center justify-around mt-6 gap-7">
        <div className="mx-auto flex items-center justify-center">
            <iframe
            title="YouTube Video"
            width="860"
            height="484"    
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            ></iframe>
        </div>
        <div className="flex justify-center mx-auto flex-col gap-3 w-full mt-8 mb-10">
            <h2 className="text-2xl lg:text-4xl font-semibold text-black text-center">
                Mematahkan Stigma Konseling Kesehatan Mental
            </h2>
            <p className="text-center text-xs text-black mb-3 mx-auto">
            MeTime menghadirkan revolusi dalam mengatasi stigma seputar konseling kesehatan mental. 
            Kami memahami bahwa stigma dapat menjadi penghalang bagi individu untuk mencari bantuan. 
            Melalui platform kami, kami menciptakan ruang yang aman dan mendukung di mana setiap orang dapat mengakses konseling tanpa rasa takut atau diskriminasi.
            </p>
        </div>
    </section>
  );
};

export default Video;

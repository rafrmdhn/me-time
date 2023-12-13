import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const [userData, setUserData] = useState([]);
  const fetchData =  async() => {
    try {
      const testimoniResponse = await axios.get("http://195.35.8.190:4000/api/testimoni");
      const testimoni = testimoniResponse.data.data;

      const userResponse = await axios.get("http://195.35.8.190:4000/api/users");
      const users = userResponse.data.data;

      const viewedData = testimoni.map((item) => {
        const user = users.find((u) => u.id === item.userId);
          return {
            id: item.id,
            firstName: user.firstName,
            lastName: user.lastName,
            image: user.image,
            rating: item.rating,            
            message: item.message,
          }
      });
      setUserData(viewedData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="mx-auto text-center justify-between md:max-w-xl lg:max-w-3xl">
      <p className="mb-6 text-normal font-semibold text-black dark:text-black">
        Testimonial
      </p>
      <h3 className="mb-20 text-4xl font-semibold text-black dark:text-black">
        Kisah Kesembuhan dari Para Peserta MeTime
      </h3>
      <Slider {...settings}>
        {userData.map((testimonial) => (
          <div key={testimonial.id}>
            <div className="mb-12">
              <div className="mb-6 flex justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.firstName}
                  className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                />
              </div>
              <h5 className="mb-4 text-xl font-semibold">{testimonial.firstName} {testimonial.lastName}</h5>
              <p className="mb-4">{testimonial.message}</p>
              <ul className="flex items-center justify-center">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <li key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
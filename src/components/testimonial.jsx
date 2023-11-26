import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Sandhika Galih",
      role: "Web Developer",
      image: "https://yt3.googleusercontent.com/ytc/APkrFKbCNUxuEPo4jL4a7clmkUy2Lgd3ic7Ze04FBbr0SA=s176-c-k-c0x00ffffff-no-rj",
      content:
        "Pelayanan konsultasi kesehatan mental mereka sungguh luar biasa! Saya merasa didengar dan dipahami sepenuhnya. Terima kasih atas bantuan yang luar biasa!",
      rating: 5,
    },
    {
        id: 2,
        name: "Windah Basudara",
        role: "Youtuber",
        image : "https://yt3.googleusercontent.com/ZqDuYMGIahUkyQ_NadOV_oy8OrxFpBI3YHpJOQYHoUmXeJT-66aPW-UB7H_q6fjcNhkBQqZc=s176-c-k-c0x00ffffff-no-rj",
        content:
            "Saya sangat terkesan dengan layanan konsultasi kesehatan mental di website ini. Konselor yang terampil dan empatik membantu saya mengatasi tantangan kesehatan mental saya. Terima kasih atas bantuan yang sangat berarti!",
        rating: 5,
    },
    {
      id: 3,
      name: "Ahmad Saputra",
      role: "Freelance Web Designer",
      content: 
        "",
      rating: 5,
    },
  ];

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
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id}>
            <div className="mb-12">
              <div className="mb-6 flex justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                />
              </div>
              <h5 className="mb-4 text-xl font-semibold">{testimonial.name}</h5>
              <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
                {testimonial.role}
              </h6>
              <p className="mb-4">{testimonial.content}</p>
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
      <div className="mb-20"></div>
    </section>
  );
};

export default Testimonial;
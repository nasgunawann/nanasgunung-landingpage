import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "../index.css"; // pastikan di sini import Swiper CSS global sudah ada

const portfolioItems = [
  {
    id: 1,
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image: "https://placehold.co/600x600?text=Project+1",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image: "https://placehold.co/600x600?text=Project+2",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image: "https://placehold.co/600x600?text=Project+3",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image: "https://placehold.co/600x600?text=Project+4",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image: "https://placehold.co/600x600?text=Project+5",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image: "https://placehold.co/600x600?text=Project+6",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-16 bg-gradient-to-b from-white via-green-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600">
            Portfolio Kami
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Beberapa hasil karya terbaik kami untuk klien dari berbagai
            industri.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {portfolioItems.map(({ id, title, description, image }) => (
            <SwiperSlide
              key={id}
              className="bg-white rounded-2xl shadow overflow-hidden max-w-[300px]"
            >
              <img src={image} alt={title} className="w-full object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-500 text-sm">{description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

import React, { useRef } from "react";

const Bestsellers = () => {
  const videoRefs = useRef([]); // store multiple refs in an array

  const HandleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const HandleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  const ReplayVideos = [
    {
      name: "Smartwatches",
      video:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_RUxbhR7CvjkNtlFUDxgw9.mp4",
      poster:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_N8V0FmOXVCG4QfYvPSp1w.jpg",
    },
    {
      name: "Wireless Earbuds",
      video:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_Bejc8URjU1NSXdhabLCmD.mp4",
      poster:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_9O6xvZXZ3kYLbUbtsnj4S.jpg",
    },
    {
      name: "Neckbands",
      video:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_OyJHanx4QSdUN3OVGTO7C.mp4",
      poster:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_KXwTUL2r91fh5uAHqSyIH.jpg",
    },
    {
      name: "Headphones",
      video:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_CpsRIdJWtpXyFN3enwbXd.mp4",
      poster:
        "https://www.boat-lifestyle.com/cdn/shop/files/quinn_v90hMzAEa585W2YTUR9UF.jpg",
    },
  ];

  return (
    <div className="px-2 sm:px-10 mb-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl">
          Explore{" "}
          <span className="font-semibold">
            Bestselle
            <span className="border-b-2 border-red-500">rs</span>
          </span>
        </h1>
      </div>

      {/* Video start from here */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 cursor-pointer">
        {ReplayVideos.map((item, index) => (
          <div key={index} className="text-center">
            <video
              //   loading="lazy"
              ref={(el) => (videoRefs.current[index] = el)}
              src={item.video}
              poster={item.poster}
              muted
              loop
              onMouseEnter={() => HandleMouseEnter(index)}
              onMouseLeave={() => HandleMouseLeave(index)}
              className="w-full rounded-lg"
            ></video>
            <h1 className="mt-2 font-semibold">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;

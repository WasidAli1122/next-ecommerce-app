import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function ReactSlider({ sliderData, alt }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = sliderData?.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, sliderData]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <>
      <div className="h-full w-full relative flex overflow-hidden rounded-md">
        {sliderData?.map((items, personIndex) => {
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === sliderData?.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <div className={`slides ${position}`} key={personIndex}>
              <Image
                src={items}
                fill
                alt={alt}
                sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
                placeholder="blur"
                blurDataURL={items}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

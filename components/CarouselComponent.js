import { useCallback } from "react";
import Image from "next/image";
import Carousel, { consts } from "react-elastic-carousel";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

import { BREAKPOINTS, IMAGES } from "../constant";

export default function CarouselComponent() {
  const myArrow = useCallback(({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <IoChevronBackCircleOutline size={40} color="white" />
      ) : (
        <IoChevronForwardCircleOutline size={40} color="#862C98" />
      );
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  }, []);

  return (
    <Carousel renderArrow={myArrow} breakPoints={BREAKPOINTS}>
      {IMAGES.map((image) => (
        <div
          key={image.id}
          className="relative w-full pb-10"
          style={{ height: 450 }}
        >
          <Image
            alt={image.alt}
            src={image.src}
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
    </Carousel>
  );
}

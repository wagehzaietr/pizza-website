import Image from "next/image";
import React from "react";

function SliderItems({image}: {image: string}) {
  return (
    <div className="flex object-contain">
<Image
  className="mx-auto object-contain h-20 w-20"
  src={image}
  alt="row img"
  height={200} // or actual height
  width={300}  // or actual width
  loading="lazy"
/>
    </div>
  );
}

export default SliderItems;

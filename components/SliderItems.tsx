import Image from "next/image";
import React from "react";

function SliderItems({image}: {image: string}) {
  return (
    <div className="flex object-contain">
<Image
  className="mx-auto object-contain h-25 w-25"
  src={image}
  alt="row img"
  height={400} // or actual height
  width={400}  // or actual width
  loading="lazy"
  quality={45}
/>
    </div>
  );
}

export default SliderItems;

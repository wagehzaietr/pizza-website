import Image from "next/image";
import React from "react";

function SliderItems({image}: {image: string}) {
  return (
    <div className="flex object-contain">
<Image
  className="mx-auto object-contain h-25 w-25"
  src={image}
  alt="row img"
  height={800} // or actual height
  width={800}  // or actual width
  loading="eager"
/>
    </div>
  );
}

export default SliderItems;

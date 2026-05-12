"use client";

import { IconProps } from "./Icons.interface";

export default function XIcon(  {action}: IconProps) {

     const shareOnX = () => {
    const url = encodeURIComponent(
      window.location.href
    );

    const text = encodeURIComponent(
      "Mira esta noticia"
    );

    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      "_blank"
    );
  };

  const followOnX = () => {
    window.open(
      "https://x.com"
    );
      
  }
    return (
        <button
  onClick={action === "share" ? shareOnX : followOnX}
  className="
    flex
    items-center
    gap-2
    rounded-lg
    bg-black
    px-4
    py-2
    text-white
    transition
    hover:bg-neutral-800
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M18.244 2H21.5l-7.11 8.13L22 22h-6.828l-5.35-6.993L3.69 22H.43l7.604-8.69L2 2h7l4.837 6.35L18.244 2zm-1.197 18h1.885L7.976 3.902H5.954L17.047 20z" />
  </svg>

</button>
    )}
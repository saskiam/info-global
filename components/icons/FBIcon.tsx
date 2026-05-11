
"use client";

export default function FBIcon( {action}: IconProps) {

    const shareOnFB = () => {
    const url = encodeURIComponent(
      window.location.href
    );
    const text = encodeURIComponent(
      "Mira esta noticia"
    );
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`,
      "_blank"
    );
  };
  const followOnFB = () => {
    window.open(
      "https://facebook.com"
    );
      
  }

    return (
        <button
  onClick={action === "share" ? shareOnFB : followOnFB}
  className="
    flex
    items-center
    gap-2
    rounded-lg
    bg-blue-600
    px-4
    py-2
    text-white
    transition
    hover:bg-blue-700
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M22 12.07C22 6.477 17.523 2 12 2S2 6.477 2 12.07c0 5.017 3.657 9.174 8.438 9.93v-7.03H7.898v-2.9h2.54V9.845c0-2.514 1.492-3.902 3.777-3.902 1.094 0 2.238.196 2.238.196v2.47h-1.26c-1.243 0-1.63.775-1.63 1.57v1.89h2.773l-.443 2.9h-2.33V22c4.78-.756 8.437-4.913 8.437-9.93z" />
  </svg>

</button>
    );
}


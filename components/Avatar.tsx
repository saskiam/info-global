
import { UserRound } from "lucide-react";
import Image from "next/image";
import { AvatarProps } from "./Components.Interface";

/**
 * Componente Avatar para mostrar el autor de una noticia
 */

export default function Avatar( { avatar, authorName , className}: AvatarProps) {
    return (
       <div className={`flex items-center gap-3 text-gray-400 ${className}`}>
        {/* Si el avatar existe, mostrarlo, de lo contrario mostrar el icono de usuario */}
        { avatar ? <Image
          className="rounded-full"
          src={avatar || "/no-img.jpg"}
          width={40}
          height={40}
          alt={authorName}
        />: <UserRound className="rounded-full" size={40}/> }

        <span>{authorName}</span>
      </div>
    );
}
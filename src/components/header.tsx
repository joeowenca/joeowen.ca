import Image from 'next/image';
import profilePicture from "../../public/profile picture.jpg";


export default function Header() {
  return (
    <div className="fixed flex items-center w-screen max-h-20 p-3">
      <div className="flex items-center">
        <Image
          src={profilePicture}
          alt="Profile picture"
          className="rounded-full w-14"
        />
        <h1 className="pl-3 font-serif text-2xl">Joe Owen</h1>
      </div>
    </div>
  )
}
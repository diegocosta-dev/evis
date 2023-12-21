import Image from "next/image";

export default function Profile({ url, name, position }) {
  return (
  <div className='flex flex-col items-center gap-2'>
    <Image
      src={url ?? "/no-profile.jpg"}
      width={300}
      height={300}
      alt="Profile Picture"
    />

    <h3 className='text-lg text-blue'>{ name ?? "user" }</h3>
    <p className='text-sm'>
      { position ?? "profile position" }
    </p>
  </div>   
  )
}
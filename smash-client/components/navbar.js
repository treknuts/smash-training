import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='flex w-full py-2 text-lg md:w-3/4 justify-evenly drop-shadow-lg md:rounded-full bg-slate-700 text-white font-bold md:text-3xl md:mx-auto md:py-4 md:mt-4'>
      <div className=''>
        <Link href='/'>
          <a className='bg-clip-content hover:bg-clip-text bg-red-400'>Home</a>
        </Link>
      </div>
      <Link href='/cards'>
        <a className='bg-clip-text text-orange-500 hover:text-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 ease-in-out duration-200 p-2'>
          Cards
        </a>
      </Link>
      <Link href='/train'>
        <a className='bg-clip-text text-orange-500 hover:text-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 ease-in-out duration-200 p-2'>
          Train
        </a>
      </Link>
      <Link href='/training'>
        <a className='bg-clip-text text-orange-500 hover:text-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 ease-in-out duration-200 p-2'>
          Training
        </a>
      </Link>
      <Link href='/create-card'>
        <a className='bg-clip-text text-orange-500 hover:text-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 ease-in-out duration-200 p-2'>
          Add Card
        </a>
      </Link>
    </nav>
  );
}

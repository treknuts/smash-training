import { useState } from "react";
import Image from "next/image";

export default function Card({ card }) {
  // const [expanded, setExpanded] = useState(false);

  // const handleClick = () => {
  //   setExpanded(!expanded);
  // };

  if (card.enabled) {
    // if (expanded) {
    //   return <div className='absolute top-10 left-10 w-2/3 h-2/3'></div>;
    // }
    return (
      <div
        // onClick={handleClick}
        className='container mx-auto my-8 p-2 w-3/4 drop-shadow-lg bg-stone-800 text-white rounded'
      >
        <div>
          <p className='text-2xl font-semibold'>{card.name}</p>
        </div>
        <div className='px-8 py-4'>
          <p className='text-md font-normal'>{card.description}</p>
          <div className='rounded-lg bg-clip-border'>
            <Image
              src={card.cpu}
              height={2000}
              width={2000}
              alt='picture of this cards CPU'
            />
          </div>

          <div className='flex justify-between mt-8'>
            <p className='text-md font-normal bg-orange-600 rounded text-white px-3 py-2'>
              Stage: {card.stage}
            </p>
            <p className='text-md font-normal bg-orange-600 rounded text-white px-3 py-2'>
              Time: {card.time}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

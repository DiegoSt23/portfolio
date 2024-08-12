import { useState, type ReactNode } from 'react';

type TechIconProps = {
  name: string;
  icon: ReactNode;
};

export const TechIcon = ({ name, icon }: TechIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='relative'>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {icon}
      </div>
      {isHovered && (
        <div className='absolute top-[-50px] right-[50%] translate-x-[50%] border py-2 px-4 bg-white dark:bg-black rounded-lg shadow-2xl'>
          <p className='text-nowrap'>{name}</p>
        </div>
      )}
    </div>
  );
};

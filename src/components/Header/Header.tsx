import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export const Header = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const handleMouseEnter = () => {
      gsap.to(buttonRef.current, {
        x: 5,
        duration: 0.3,
      });
    };

    if (buttonRef.current) {
      buttonRef.current.addEventListener('mouseenter', handleMouseEnter);
    }
  },[])

  return (
    <header className="flex justify-end m-[12px] bg-gray-300">
      <button className="border-2 border-[#4A4F54] text-[#4A4F54] rounded-full w-[80px] h-[80px]" ref={buttonRef}>
        <div className="">
          MENU
        </div>
      </button>
    </header>
  )
}
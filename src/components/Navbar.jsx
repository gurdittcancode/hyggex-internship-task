import { Menu } from 'lucide-react';
import Logo from '../assets/logo.svg';
import { useState } from 'react';

export default function Navbar() {
  const [dropDown, toggleDropDown] = useState(false);

  return (
    <>
      <div className="w-full pt-[30px] flex justify-between">
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        {/* Mobile navigation */}
        <div
          className="sm:hidden inline-block flex flex-col"
          onClick={() => toggleDropDown((prev) => !prev)}>
          <Menu size={32} color="#06286E" />
          {dropDown ? (
            <>
              <div className="mt-6">
                <ul className="mt-2 flex flex-col gap-7 items-center text-gray_text">
                  <li>Home</li>
                  <li>Flashcard</li>
                  <li>Contact</li>
                  <li>FAQ</li>
                  <button className="border py-[13px] px-[40px] bg-gradient-to-r from-[#06286E] to-[#164EC0] text-white rounded-[32px]">
                    Login
                  </button>
                </ul>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>

        {/* Desktop navigation */}
        <ul className="hidden sm:flex lg:gap-[40px] gap-7 items-center text-gray_text">
          <li>Home</li>
          <li>Flashcard</li>
          <li>Contact</li>
          <li>FAQ</li>
          <button className="border py-[13px] px-[40px] bg-gradient-to-r from-[#06286E] to-[#164EC0] text-white rounded-[32px]">
            Login
          </button>
        </ul>
      </div>

      {/* {dropDown ? (
        <>
          <div className="mt-6">
            <ul className="mt-2 flex flex-col gap-7 items-center text-gray_text">
              <li>Home</li>
              <li>Flashcard</li>
              <li>Contact</li>
              <li>FAQ</li>
              <button className="border py-[13px] px-[40px] bg-gradient-to-r from-[#06286E] to-[#164EC0] text-white rounded-[32px]">
                Login
              </button>
            </ul>
          </div>
        </>
      ) : (
        <></>
      )} */}
    </>
  );
}

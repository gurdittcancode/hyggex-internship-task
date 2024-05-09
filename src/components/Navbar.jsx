import Logo from '../assets/logo.svg';

export default function Navbar() {
  return (
    <div className="w-full pt-[30px] flex justify-between">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="flex lg:gap-[40px] gap-7 items-center text-gray_text">
        <li>Home</li>
        <li>Flashcard</li>
        <li>Contact</li>
        <li>FAQ</li>
        <button className="border py-[13px] px-[40px] bg-gradient-to-r from-[#06286E] to-[#164EC0] text-white rounded-[32px]">
          Login
        </button>
      </ul>
    </div>
  );
}

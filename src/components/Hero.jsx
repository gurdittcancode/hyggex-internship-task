import { Lightbulb, Maximize, Volume2, RotateCcw } from 'lucide-react';
import nextarrow from '../assets/nextarrow.svg';
import prevarrow from '../assets/prevarrow.svg';

import './home.module.css'

export default function Hero() {
  return (
    <div>
      <h1 className="text-3xl font-bold text_gradient">
        Relations and Functions ( Mathematics )
      </h1>
      <div className="mt-12 flex flex-col items-center">
        <div className="lg:w-2/5 w-3/4 flex justify-evenly text-gray_text lg:text-[18px] ">
          <span className="pb-1 font-semibold text-dark_blue border-b-2 border-dark_blue">
            Study
          </span>
          <span>Quiz</span>
          <span>Test</span>
          <span>Game</span>
          <span>Others</span>
        </div>

        {/* Study Area */}

        <div className="container w-3/4 lg:w-5/12 h-[375px] mt-8  rounded-3xl flex justify-center items-center text-white text-3xl font-semibold relative">
          <div className="the_front size-full bg-gradient-to-bl from-[#061b92] to-[#2182ee]">
            <Lightbulb className="absolute top-6 left-6" />
            <Volume2 className="absolute top-6 right-6" />
            {'9 + 6 + 7x - 2x - 3'}
          </div>
        </div>

        {/* Controls area */}

        <div className="lg:w-2/5 w-3/5 flex justify-between items-center lg:text-[18px] px-7 mt-10">
          <RotateCcw className="text-dark_blue" size={32} strokeWidth={2} />
          <div className="flex gap-6 items-center">
            <img src={prevarrow} className="size-10" />
            <span className="font-bold text-lg">01/10</span>
            <img src={nextarrow} className="size-10" />
          </div>
          <Maximize className="text-dark_blue" size={32} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}

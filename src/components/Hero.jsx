import { Lightbulb, Maximize, Volume2, RotateCcw } from 'lucide-react';
import nextarrow from '../assets/nextarrow.svg';
import prevarrow from '../assets/prevarrow.svg';

import './home.css';

export default function Hero() {
  return (
    <div>
      <h1 className="text-3xl font-bold text_gradient">
        Relations and Functions <span className='inline-block'>( Mathematics )</span>
      </h1>
      <div className="mt-12 flex flex-col items-center">
        <div className="lg:w-2/5 w-full flex justify-evenly text-gray_text lg:text-[20px] ">
          <span className="pb-1 font-semibold text-dark_blue border-b-2 border-dark_blue">
            Study
          </span>
          <span>Quiz</span>
          <span>Test</span>
          <span>Game</span>
          <span>Others</span>
        </div>

        {/* Study Area */}
        <div className="w-full md:w-2/3 lg:w-5/12 justify-center items-center mt-6">
          <div className="container ">
            <div className="screen">
              <div className="front flex justify-center">
                <div className="self-start text-white flex w-full justify-between px-10 py-6">
                  <span>
                    <Lightbulb size={36} />
                  </span>
                  <span>
                    <Volume2 size={36} />
                  </span>
                </div>
                <p className="absolute self-center text-3xl font-semibold text-white">
                  9 + 6 + 7x - 2x - 3
                </p>
              </div>

              <div className="back flex justify-center">
                <div className="self-start text-white flex w-full justify-between px-10 py-6">
                  <span>
                    <Lightbulb size={36} />
                  </span>
                  <span>
                    <Volume2 size={36} />
                  </span>
                </div>
                <p className="absolute self-center text-3xl font-semibold text-white">
                  5x + 12
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls area */}

        <div className="lg:w-2/5 md:w-3/5 flex gap-4 md:gap-0 justify-between items-center  px-7 mt-10">
          <RotateCcw className="text-dark_blue" size={40} strokeWidth={3} />
          <div className="flex md:gap-7 gap-3 items-center my-4">
            <img src={prevarrow} className="size-12" />
            <span className="font-bold text-2xl">01/10</span>
            <img src={nextarrow} className="size-12" />
          </div>
          <Maximize className="text-dark_blue" size={40} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}

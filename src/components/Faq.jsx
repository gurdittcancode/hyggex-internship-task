import { useState } from 'react';
import './faq.module.css';

import { ChevronDown } from 'lucide-react';

function FaqCard({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`mt-7 border border-blue-500 px-5 py-4 rounded-xl  overflow-hidden ${open ? 'max-h-[350px] md:max-h-[200px]' : 'max-h-[75px]'} transition-all ease-in-out  duration-500`}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex justify-between w-full">
        <span className="question">{q}</span>
        <span
          className={`${
            open ? 'rotate-180' : ''
          } transition-all ease-in-out duration-500`}>
          <ChevronDown className="down-icon" />
        </span>
      </button>
      <div>
        <p className="mt-7">{a}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <main className="md:mt-2 mt-6">
      <p className="text_gradient font-extrabold text-[52px]">FAQ</p>

      <div className="mt-2">
        <FaqCard
          q="Can education flashcards be used for all age groups?"
          a="Yes, education flashcards can be tailored to different age groups 
          and learning levels. There are flashcards designed for pre-schoolers, 
          elementary school students, high school students, and even college 
          students and adult learners."
        />
        <FaqCard
          q="How do education flashcards work?"
          a="Education flashcards work by presenting a question or prompt on one side
            and the corresponding answer or information on the other. Users can 
            view the answers repeatedly, reinforcing their memory and enhancing learning
            through repetition."
        />
        <FaqCard
          q="Can education flashcards be used for test preparation?"
          a="Absolutely. Flash cards are an excellent tool for test preparation, allowing 
            students to review key concepts, terms, and facts. They provide a quick and focused 
            way to reinforce knowledge before exams."
        />
      </div>
    </main>
  );
}

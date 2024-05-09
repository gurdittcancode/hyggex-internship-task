import Publish from '../assets/publish.svg';
import CreateIcon from '../assets/create.svg';

export default function Create() {
  return (
    <div className="w-full flex flex-wrap justify-between sm:items-center">
      <img src={Publish} alt="" className="size-52" />
      <span className="flex items-center gap-2">
        <img src={CreateIcon} />
        <p className='text_gradient font-bold text-2xl'>Create Flashcard</p>
      </span>
    </div>
  );
}

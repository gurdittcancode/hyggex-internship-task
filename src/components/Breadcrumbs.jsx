import { Home, ChevronRight } from 'lucide-react';

export default function Breadcrumbs() {
  return (
    <div className="flex gap-2 items-center text-gray_text">
      <Home color="#696671" size={24}/>
      <ChevronRight color="#06286E" />
      <span>Flashcard</span>
      <ChevronRight color="#06286E" />
      <span>Mathematics</span>
      <ChevronRight color="#06286E" />
      <span className="text-dark_blue font-semibold">
        Relation and Function
      </span>
    </div>
  );
}

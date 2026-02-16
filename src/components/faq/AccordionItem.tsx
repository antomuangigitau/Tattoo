import type { AccordionItemProps } from ".";
const AccordionItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) => {
  return (
    <div className="border border-gray-700 rounded-2xl md:rounded-[40px] overflow-hidden transition-all duration-300 hover:border-gray-600">

      <button
        onClick={onToggle}
        className="w-full px-5 py-5 md:px-8 md:py-6 flex items-center justify-between text-left hover:bg-gray-900/30 transition-colors duration-200">
        <span className="text-sm md:text-lg text-gray-200 pr-3 md:pr-4">
          {question}
        </span>


        <div className="shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full border border-gray-600 flex items-center justify-center transition-transform duration-300">
          <svg
            className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}>
        <div className="px-5 pb-5 pt-1 md:px-8 md:pb-6 md:pt-2">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;

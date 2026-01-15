import type { AccordionItemProps } from ".";
const AccordionItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) => {
  return (
    <div className="border border-gray-700 rounded-full md:rounded-[40px] overflow-hidden transition-all duration-300 hover:border-gray-600">
      {/* Question Button */}
      <button
        onClick={onToggle}
        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-900/30 transition-colors duration-200">
        <span className="text-base md:text-lg text-gray-200 pr-4">
          {question}
        </span>

        {/* Plus/Minus Icon */}
        <div className="shrink-0 w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center transition-transform duration-300">
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
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
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="px-8 pb-6 pt-2">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;

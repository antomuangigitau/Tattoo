const StepCard = ({
  number,
  title,
  description,
  icon,
  index,
  isLast,
}: StepCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative mb-32 last:mb-0">

      {!isLast && (
        <div
          className={`absolute w-0.5 h-32 bg-red-600 ${isEven ? "left-4 md:left-auto md:right-1/4" : "left-4 md:left-1/4"
            } top-full z-0`}
          style={{
            background: "linear-gradient(180deg, #dc2626 0%, #991b1b 100%)",
          }}
        />
      )}


      <div
        className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${isEven ? "md:flex-row-reverse" : ""
          }`}>

        <div className="hidden md:block md:w-1/2" />


        <div className="relative md:w-1/2">

          <div
            className={`absolute -top-3 ${isEven ? "md:-right-3 -right-3" : "md:-left-3 -left-3"
              } w-6 h-6 bg-red-600 rounded-full shadow-lg z-20 border-2 border-red-700`}
          />


          <div
            className="bg-linear-to-br from-gray-100 to-gray-200 text-black p-6 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            style={{
              boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
            }}>

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-800">
                  {number}
                </span>
                {icon && <span className="text-2xl">{icon}</span>}
              </div>

              <span className="text-xl opacity-30">🦋</span>
            </div>


            <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>


            <p className="text-sm text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;

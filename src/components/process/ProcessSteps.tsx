import StepCard from "./StepCard";

const ProcessSteps = ({
  title,
  subtitle,
  steps,
  className = "",
}: ProcessTimelineProps) => {
  return (
    <section
      id="process"
      className={`min-h-screen  bg-surface p-8 md:p-16 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-400 text-sm md:text-base max-w-md">
              {subtitle}
            </p>
          )}
        </div>

        {/* Timeline */}
        <div className="relative">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              {...step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;

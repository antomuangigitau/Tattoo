import ProcessSteps from "./process/ProcessSteps";
import { processSteps } from "./process/steps";
const ProcessTimeline = () => {
  return (
    <ProcessSteps
      title="From Idea To Ink"
      subtitle="Here's how we bring your tattoo to life, guiding you through every step of the process from start to finish, ensuring your vision becomes a stunning reality."
      steps={processSteps}
    />
  );
};

export default ProcessTimeline;

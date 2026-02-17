declare global {

  interface StickyNote {
    text: string;
    color?: "yellow" | "pink" | "blue" | "green";
    position?: "right" | "left" | "bottom";
  }

  interface Photo {
    image: string;
    date?: string;
    stickyNote?: StickyNote;
    rotation?: number;
  }

  interface PhotoBoardProps {
    title?: string;
    photos: Photo[];
    className?: string;
  }

  interface PolaroidPhotoProps extends Photo {
    index: number;
    alt?: string;
  }

  interface TapeStripProps {
    position: number;
  }

  interface StickyNoteProps {
    text: string;
    color?: "yellow" | "pink" | "blue" | "green";
    position?: "right" | "left" | "bottom";
  }
  interface Photo {
    image: string;
    date: string;
    stickyNote?: StickyNote;
  }


  interface ProcessStep {
    number: string;
    title: string;
    description: string;
    icon?: string;
  }

  interface ProcessTimelineProps {
    title: string;
    subtitle?: string;
    steps: ProcessStep[];
    className?: string;
  }

  interface StepCardProps extends ProcessStep {
    index: number;
    isLast: boolean;
  }
}

export { };

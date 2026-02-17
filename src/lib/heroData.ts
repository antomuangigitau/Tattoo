import full_arm_240 from "@/assets/full_arm_240.avif";
import full_arm_480 from "@/assets/full_arm_480.avif";
import back_240 from "@/assets/back_240.avif";
import back_480 from "@/assets/back_480.avif";
import kehlani_240 from "@/assets/kehlani_240.avif";
import kehlani_480 from "@/assets/kehlani_480.avif";
import bird_240 from "@/assets/bird_240.avif";
import bird_480 from "@/assets/bird_480.avif";
import lion_240 from "@/assets/lion_240.avif";
import lion_480 from "@/assets/lion_480.avif";
import guitar_240 from "@/assets/guitar_240.avif";
import guitar_480 from "@/assets/guitar_480.avif";

export const images = [
  {
    src: full_arm_480,
    srcSet: `${full_arm_240} 240w, ${full_arm_480} 480w`,
  },
  {
    src: back_480,
    srcSet: `${back_240} 240w, ${back_480} 480w`,
  },
  {
    src: kehlani_480,
    srcSet: `${kehlani_240} 240w, ${kehlani_480} 480w`,
  },
  {
    src: bird_480,
    srcSet: `${bird_240} 240w, ${bird_480} 480w`,
  },
  {
    src: lion_480,
    srcSet: `${lion_240} 240w, ${lion_480} 480w`,
  },
  {
    src: guitar_480,
    srcSet: `${guitar_240} 240w, ${guitar_480} 480w`,
  },
];

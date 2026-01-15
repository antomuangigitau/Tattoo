import examplePhotos from "./main/example";
import PhotoBoard from "./main/PhotoBoard";

const PhotoData = () => {
  return <PhotoBoard title="On The Board" photos={examplePhotos} />;
};

export default PhotoData;

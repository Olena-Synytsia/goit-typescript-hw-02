import { Image } from "../../services/api.types";

export interface ImageGalleryProps {
  images: Image[];
  onClick: (image: Image) => void;
}

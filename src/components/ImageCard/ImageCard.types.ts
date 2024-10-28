import { Image } from "../../services/api.types";

export interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

import { Image } from "../../services/api.types";

export interface ImageModalProps {
  image: Image | null;
  onClose: () => void;
}

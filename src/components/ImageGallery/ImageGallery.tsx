import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../../services/api.types";
import s from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  onClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onClick }) => {
  return (
    images.length > 0 && (
      <ul className={s.gallery}>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} onClick={onClick} />
          </li>
        ))}
      </ul>
    )
  );
};

export default ImageGallery;

import ImageCard from "../ImageCard/ImageCard";
import { ImageGalleryProps } from "./ImageCallery.types";

import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick }: ImageGalleryProps) => {
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

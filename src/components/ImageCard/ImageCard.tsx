import { ImageCardProps } from "./ImageCard.types";
import s from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }: ImageCardProps) => {
  return (
    <div className={s.container} onClick={() => onClick(image)}>
      <img
        className={s.img}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;

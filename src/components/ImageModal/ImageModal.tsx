import { useEffect } from "react";
import Modal from "react-modal";
import toast from "react-hot-toast";
import { ImageModalProps } from "./ImageModal.type";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }: ImageModalProps) => {
  useEffect(() => {
    try {
      if (image) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    } catch {
      toast.error("Failed to fetch images. Please try again.");
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [image]);

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
      ariaHideApp={true}
      shouldCloseOnOverlayClick={true}
    >
      <div>
        {image && (
          <>
            <img
              className={s.img}
              src={image.urls.regular}
              alt={image.alt_description}
            />
            <div className={s.wrapper}>
              <h2 className={s.title}>{image.alt_description}</h2>
              <p className={s.text}>{`Likes: ${image.likes}`}</p>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;

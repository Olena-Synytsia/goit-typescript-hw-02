import Modal from "react-modal";

import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
      backdropClassName={s.backdrop}
    >
      <div>
        {image && (
          <img
            className={s.img}
            src={image.urls.regular}
            alt={image.alt_description}
          />
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;

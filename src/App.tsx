import { useState, useEffect } from "react";

import toast, { Toaster } from "react-hot-toast";
import { fetchImages } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import { Image } from "./services/api.types";
import { FetchImages } from "./services/api.types";
import "./App.css";

function App() {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [totalImages, setTotalImages] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const [selectedImg, setSelectedImg] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchImagesData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data: FetchImages = await fetchImages(query, page);
        setTotalImages(data.total);
        if (data.results.length === 0) {
          toast.error("The image does not exist. Make a new request.");
        } else {
          if (page === 1) {
            setImages(data.results);
          } else {
            setImages((prev) => [...prev, ...data.results]);
          }
        }
      } catch {
        toast.error("Failed to fetch images. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchImagesData();
  }, [query, page]);

  const isEndLoadMore = images.length < totalImages;

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    closeModal();
  };

  const loadMoreImg = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = (image: Image) => {
    if (!modal) {
      setModal(true);
    }
    setSelectedImg(image);
  };

  const closeModal = () => {
    setSelectedImg(null);
    setModal(false);
  };

  return (
    <div className={modal ? "inert-content" : ""}>
      <SearchBar setQuery={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onClick={openModal} />
      {images.length > 0 && isEndLoadMore && (
        <LoadMoreBtn onClick={loadMoreImg} />
      )}
      {modal && <ImageModal image={selectedImg} onClose={closeModal} />}
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import { fetchImages } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImagesData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchImages(query, page);
        if (page === 1) {
          setImages(data.results);
        } else {
          setImages((prev) => [...prev, ...data.results]);
        }
      } catch {
        setError("Failed to fetch images. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchImagesData();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
  };

  const loadMoreImg = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = (image) => {
    setSelectedImg(image);
    setModal(true);
  };

  const closeModal = () => {
    setSelectedImg(null);
    setModal(false);
  };

  return (
    <div>
      <h2>APP</h2>
      <SearchBar setQuery={handleSearch} />
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <ImageGallery images={images} onClick={openModal} />
      {images.length > 0 && <LoadMoreBtn onClick={loadMoreImg} />}
      {modal && <ImageModal image={selectedImg} onClose={closeModal} />}
    </div>
  );
}

export default App;

import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={s.container}>
      <button onClick={onClick}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;

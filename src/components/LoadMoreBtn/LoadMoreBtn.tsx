import { LoadMoreBtnProps } from "./LoadMoreBtn.type";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <div className={s.container}>
      <button className={s.btn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;

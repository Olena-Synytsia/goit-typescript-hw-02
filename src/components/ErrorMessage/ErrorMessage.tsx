import { ErrorMessageProps } from "./ErrorMessage.types";
import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <p className={s.text}>{message}</p>;
};

export default ErrorMessage;

import s from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <p className={s.text}>{message}</p>;
};

export default ErrorMessage;

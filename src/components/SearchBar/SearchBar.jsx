import toast, { Toaster } from "react-hot-toast";
import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";

const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    if (!values.query.trim()) {
      toast.error("Oops... Enter your search query!");
      return;
    }
    setQuery(values.query.trim().toLowerCase());
    resetForm();
  };

  return (
    <header className={s.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={s.input}
          />
          <button className={s.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
      <Toaster position="bottom-right" className={s.error} />
    </header>
  );
};

export default SearchBar;

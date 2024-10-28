export interface SearchBarProps {
  setQuery: (query: string) => void;
}

export interface FormValues {
  query: string;
}

export interface ResetForm {
  resetForm: () => void;
}

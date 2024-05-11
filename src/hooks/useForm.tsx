import { useState } from "react";
const useForm = () => {
  const [form, setForm] = useState({
    id: "",
    title: "",
    date: "",
    content: "",
    folder: "",
  });

  const changeForm = (field: string, value: string) => {
    setForm((state) => ({ ...state, [field]: value }));
  };

  const clearForm = () => {
    setForm({
      id: "",
      title: "",
      date: "",
      content: "",
      folder: "",
    });
  };

  return {
    form,
    setForm,
    changeForm,
    clearForm,
  };
};

export default useForm;

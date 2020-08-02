import { useState } from 'react';

const useForm = (initialData) => {
  const [formValues, setFormValues] = useState(initialData);

  const setValues = (input, value) => {
    setFormValues({
      ...formValues,
      [input]: value,
    });
  };

  const handleChange = (event) => {
    setValues(
      event.target.getAttribute('name'),
      event.target.value,
    );
  };

  const clearForm = () => {
    setFormValues(initialData);
  };

  return {
    formValues,
    handleChange,
    clearForm,
  };
};

export default useForm;

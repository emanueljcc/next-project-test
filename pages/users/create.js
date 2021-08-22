import { useState } from "react";
import { useDispatch } from "react-redux";

import Form from "../../components/users/Form";
import { setUser } from "../../store/actions/userAction";

export default function Create() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(defaultValues());
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const el = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [el.name]: el.value,
    }));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    await dispatch(setUser(formData));
    setLoading(false);
  };

  return (
    <Form
      data={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      loading={loading}
    />
  );
}

const defaultValues = () => ({
  name: "",
  username: "",
  email: "",
});

import { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { getUsers, updateUser } from "../../store/actions/userAction";
import Form from "../../components/users/Form";

export default function Edit() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const { query } = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const executeInitUsers = useCallback(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (!users.data.length) {
      executeInitUsers();
    }
  }, []);

  const user = useMemo(
    () =>
      (users.data.length &&
        users.data.find((res) => res.id === Number(query.id))) ||
      {},
    [users, query.id]
  );

  useEffect(() => {
    setFormData({
      name: user.name,
      username: user.username,
      email: user.email,
    });
  }, [user]);

  const isDisabled = useMemo(() => (query?.show ? true : false), [query]);

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
    await dispatch(updateUser(user));
    setLoading(false);
  };

  return (
    <Form
      data={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      disabled={isDisabled}
      loading={loading}
    />
  );
}

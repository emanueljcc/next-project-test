import { toast } from "react-toastify";
import { BASE_PATH } from "../../constant";

export async function get() {
  try {
    const url = `${BASE_PATH}/users`;
    const params = {
      method: "GET",
    };

    const response = await fetch(url, params);
    const result = await response.json();

    return result;
  } catch (error) {
    toast.error("😞 Excuse me, an error has occurred, please try again later!");
    return null;
  }
}

export async function create(formData) {
  try {
    const url = `${BASE_PATH}/users`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(url, params);
    const result = await response.json();

    toast.success("🤟 Saved successfully!");

    return result;
  } catch (error) {
    toast.error("😞 Excuse me, an error has occurred, please try again later!");
    return null;
  }
}

export async function update(formData) {
  try {
    const url = `${BASE_PATH}/users/${formData.id}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(url, params);
    const result = await response.json();
    toast.success("🤟 Updated successfully!");

    return result;
  } catch (error) {
    toast.error("😞 Excuse me, an error has occurred, please try again later!");
    return null;
  }
}

export async function remove(formData) {
  try {
    const url = `${BASE_PATH}/users/${formData.id}`;
    const params = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(url, params);
    const result = await response.json();
    toast.info("🤟 Removed successfully!");

    return result;
  } catch (error) {
    toast.error("😞 Excuse me, an error has occurred, please try again later!");
    return null;
  }
}

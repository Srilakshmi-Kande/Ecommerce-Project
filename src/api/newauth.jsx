import axios from "axios";

export const userSignup = async (name, email, password) => {
  const url = "https://api.escuelajs.co/api/v1/users/";
  try {
    const { data } = await axios.post(url, {
      name,
      email,
      password,
      avatar: "https://api.lorem.space/image/face?w=640&h=480",
    });
    return data;
  } catch (err) {
    console.error("Signup failed:", err.response?.data || err.message);
    throw err.response?.data || err;
  }
};

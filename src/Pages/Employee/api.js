import axios from "axios";

// Fetch My Assets
export const fetchMyAssets = async (search, filters) => {
  const query = new URLSearchParams({
    search: search || "",
    status: filters.status || "",
    type: filters.type || "",
  }).toString();

  const response = await axios.get(
    `https://sam000.vercel.app/api/my-assets?${query}`
  );
  return response.data;
};

// Update Asset Status
export const updateAssetStatus = async (id, updateData) => {
  const response = await axios.patch(
    `https://sam000.vercel.app/api/assets/${id}`,
    updateData
  );
  return response.data;
};

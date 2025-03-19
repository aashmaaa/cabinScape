import axios from "axios";

const API_URL =
  "https://api.airtable.com/v0/appMKsGzCJo51yXH0/Request-Callback";

export async function airData() {
  const token =
    "patjRxooHGhPWWN1w.1dd0e984b30f366a450db74cbd028f38c60bf419ddaed6287e51105ee25f6e21";
  if (!token) {
    throw new Error("No authentication token found");
  }

  try {
    const response = await axios.get(`${API_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching user orders:",
      error?.response?.data || error
    );
    throw new Error("Bookings could not be loaded");
  }
}

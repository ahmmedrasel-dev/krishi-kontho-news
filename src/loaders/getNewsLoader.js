import axiosPrivate from "./../Api/AxiosPrivate";

export async function getNewsLoader() {
  try {
    // Fetch featured news
    const { data: featuredNews } = await axiosPrivate.get(
      `${import.meta.env.VITE_SERVER_URL}/featured_news`
    );

    // Fetch lead section news
    const { data: leadSecNews } = await axiosPrivate.get(
      `${import.meta.env.VITE_SERVER_URL}/lead_section_news`
    );

    return { featuredNews, leadSecNews };
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error; // Re-throw the error to handle it in the caller
  }
}

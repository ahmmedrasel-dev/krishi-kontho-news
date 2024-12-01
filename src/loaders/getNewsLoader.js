import axiosPrivate from "./../Api/AxiosPrivate";

export async function getNewsLoader() {
  try {
    // Fetch national_news
    const { data: nationalNews } = await axiosPrivate.get(
      `${import.meta.env.VITE_SERVER_URL}/national_news`
    );

    // Fetch saradesh_news
    const { data: saradeshNews } = await axiosPrivate.get(
      `${import.meta.env.VITE_SERVER_URL}/saradesh_news`
    );
    // Fetch featured_news
    const { data: featuredNews } = await axiosPrivate.get(
      `${import.meta.env.VITE_SERVER_URL}/featured_news`
    );

    // Fetch lead section news
    const { data: leadSecNews } = await axiosPrivate.get(
      `${import.meta.env.VITE_SERVER_URL}/lead_section_news`
    );

    return { featuredNews, leadSecNews, nationalNews, saradeshNews };
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
}

import axiosPrivate from "./../Api/AxiosPrivate";

export async function getNewsLoader() {
  try {
    // Fetch featured news
    const { data: featuredNews } = await axiosPrivate.get(
      "https://krishiserver.krishikantho.com/api/featured_news"
    );

    // Fetch lead section news
    const { data: leadSecNews } = await axiosPrivate.get(
      "https://krishiserver.krishikantho.com/api/lead_section_news"
    );

    return { featuredNews, leadSecNews };
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error; // Re-throw the error to handle it in the caller
  }
}

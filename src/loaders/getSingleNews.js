import axiosPrivate from "./../Api/AxiosPrivate";
export async function getSingleNewsLoader({ params }) {
  try {
    // Fetch lead section news
    const { data: latestNews } = await axiosPrivate.get(
      `${import.meta.env.VITE_SERVER_URL}/all-news`
    );

    // Fetch featured news
    const { data: singleNews } = await axiosPrivate.get(
      `${import.meta.env.VITE_SERVER_URL}/news/${params.slug}`
    );

    return { singleNews, latestNews };
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
}

import axiosPrivate from "./../Api/AxiosPrivate";
export async function getSingleNewsLoader({ params }) {
  try {
    // Fetch featured news
    const { data: singleNews } = await axiosPrivate.get(
      `https://krishiserver.krishikantho.com/api/news/${params.slug}`
    );

    // Fetch lead section news
    const { data: latestNews } = await axiosPrivate.get(
      "https://krishiserver.krishikantho.com/api/all-news"
    );

    return { singleNews, latestNews };
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error; // Re-throw the error to handle it in the caller
  }
}

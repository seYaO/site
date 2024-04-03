import type { BlogArticle } from "../types";

export const useBlog = () => {
  const articles = useState<BlogArticle[]>("articles", () => []);
  const latest = useState<Number>("latest", () => 0);
  const total = useState<Number>("total", () => 0);

  async function fetchList(category: String) {
    // if (articles.value.length) {
    //   return;
    // }

    try {
      if (category) {
        const data = await queryContent<BlogArticle>("/blogs")
          .where({ _extension: "md", category })
          .without(["body", "excerpt"])
          .sort({ date: -1 })
          .find();
        const list = (data as BlogArticle[]).filter(article => article._path !== "/blogs");
        articles.value = insertYearToPosts(list);
        total.value = list.length;
      } else {
        const data = await queryContent<BlogArticle>("/blogs").where({ _extension: "md" }).without(["body", "excerpt"]).sort({ date: -1 }).find();
        const list = (data as BlogArticle[]).filter(article => article._path !== "/blogs");
        articles.value = list.slice(0, 6);
        latest.value = articles.value.length;
        total.value = list.length;
      }
    } catch (e) {
      articles.value = [];
      return e;
    }
  }

  return { articles, latest, total, fetchList };
};

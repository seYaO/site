import type { DocsArticle } from "../types";

export const useDocs = () => {
  const articles = useState<DocsArticle[]>("articles", () => []);

  async function fetchList(group: String) {
    // if (articles.value.length) {
    //   return;
    // }

    try {
      const data = await queryContent<DocsArticle>("/docs/" + group)
        .where({ _extension: "md", _dir: { $contains: group } })
        .without(["body", "excerpt"])
        .sort({ title: 1 })
        .find();
      const list = (data as DocsArticle[]).filter(article => article._path !== "/docs");
      articles.value = list.map(x => ({ ...x, to: x._path, label: x.title }));
    } catch (e) {
      articles.value = [];
      return e;
    }
  }

  return { articles, fetchList };
};

import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

export interface DocsArticle extends ParsedContent {
  description: string;
  date: Date;
  image: string;
  tags: string[];
  category: string;
}

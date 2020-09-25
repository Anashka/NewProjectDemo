import { Author } from './author';

export interface AuthorService {
  addauthor(author: Author): boolean;
  getauthors(): Author[];
  getauthor(id: string): Author | null;
}

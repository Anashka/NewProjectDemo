export interface Author {
  id: string;
  name: string;
  biography: string;
  dateofbirth: Date | string;
  email: string;
  listofbooks: string | [];
}

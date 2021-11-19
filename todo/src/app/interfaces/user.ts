import { Task } from "./task";
// id? - klautukas nurodo, kad sis laukelis gali buti null
export interface User {
  id?: number,
  name: string,
  email: string,
  picture?: string, // neprivalomas kintamasis
  tasks?:Task[]
}
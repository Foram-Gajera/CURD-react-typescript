import User from "./user.interface";

export interface initialStateType {
  users: User[];
  loading: boolean;
  error: string;
}

export interface RegisterUser {
  user: User;
}
export interface RegisterUserBio {
  user: UserBIO;
}

interface User {
  username: string;
  email: string;
  password: string;
}
interface UserBIO {
  email: string;
  username: string;
  bio: string;
  image: string;
  token?: string;
}

export interface LoginUser {
  user: User;
}
export interface LoginUserBio {
  user: LoginUserBio;
}

export interface LoginUserBio {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}

export interface User {
  email: string;
  password: string;
}

export interface UpdateProfile {
  user: UpdateProfileBIO;
}
export interface UpdateProfileData {
  user: User;
}
interface User {
  email: string;
  password?: string;
  username: string;
  bio?: string;
  image: string;
}
interface UpdateProfileBIO {
  email: string;
  password: string;
  username: string;
  bio: string;
  image: string;
}

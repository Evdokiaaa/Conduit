export interface FollowUser {
  profile: Profile;
}

interface Profile {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

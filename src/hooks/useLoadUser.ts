import { useFetch } from './useFetch';
import { userMapper } from '../utils/helpers';

export interface User {
  username: string;
  name: string;
  image: string;
  description: string;
  url: string;
  company: string;
  twitter: string;
  location: string;
  date: string;
  repositories: number;
  followers: number;
  following: number;
}

export type UseLoadUser = {
  user: User | null;
  loading: boolean;
};

export type UseLoadUserHook = (search: string) => UseLoadUser;

export const useLoadUser: UseLoadUserHook = (search: string) => {
  const { data, loading, error } = useFetch(`https://api.github.com/users/${search}`);
  const userFound: boolean = Boolean(error) || Boolean((data || {}).login);

  return {
    user: userFound ? userMapper(data) as User : null,
    loading,
  };
};

import objectPath from 'object-path';
import moment from 'moment';
import { BREAKPOINTS, THEMES } from './constants';

// // Mappers

export const userMapper = (user: any) => {
  if (!user) {
    return {};
  }

  const get = objectPath.get;

  return {
    username: get(user, 'login'),
    name: get(user, 'name'),
    image: get(user, 'avatar_url'),
    description: get(user, 'bio') || 'This profile has no bio',
    url: get(user, 'html_url'),
    twitter: get(user, 'twitter_username'),
    location: get(user, 'location'),
    company: get(user, 'company'),
    date: get(user, 'created_at'),
    repositories: get(user, 'public_repos'),
    followers: get(user, 'followers'),
    following: get(user, 'following'),
  };
};

export const userNumbersMapper = (user: any) => {
  if (!user) {
    return null;
  }

  return [
    { label: 'Repos', number: user.repositories },
    { label: 'Followers', number: user.followers },
    { label: 'Following', number: user.following },
  ];
};

export const userSocialMapper = (user: any) => {
  if (!user) {
    return null;
  }

  return [
    { id: 'location', value: user.location },
    { id: 'twitter', value: user.twitter },
    { id: 'url', value: user.url },
    { id: 'company', value: user.company },
  ];
};

// Utils

export const getThemeMode = (isDarkMode: boolean) => (isDarkMode ? THEMES.DARK : THEMES.LIGHT);

export const getDeviceConfig = (width: number) => {
  if (width < 576) {
    return BREAKPOINTS.XS;
  } else if (width < 768) {
    return BREAKPOINTS.SM;
  } else if (width < 992) {
    return BREAKPOINTS.MD;
  } else if (width < 1200) {
    return BREAKPOINTS.LG;
  } else if (width < 1600) {
    return BREAKPOINTS.XL;
  } else {
    return BREAKPOINTS.XXL;
  }
};
export const isMobile = (breakpoint: string) => breakpoint === BREAKPOINTS.XS;
export const isMobileTablet = (breakpoint: string) => [BREAKPOINTS.XS, BREAKPOINTS.SM].includes(breakpoint);
export const isMobileTabletMedium = (breakpoint: string) => [BREAKPOINTS.XS, BREAKPOINTS.SM, BREAKPOINTS.MD].includes(breakpoint);

export const sortArrayByKey = (array: Array<any>, key: string, descending: boolean = false) => {
  const arraySorted = array.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
  return descending ? arraySorted.reverse() : arraySorted;
};

export const formattedDate = (date: string) => {
  return moment(new Date(date)).format('ll');
};

export const isValidateUrl = (value: string) => {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
};

export const queryParams = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const queryParams = Object.fromEntries(urlSearchParams.entries());

  return queryParams;
};

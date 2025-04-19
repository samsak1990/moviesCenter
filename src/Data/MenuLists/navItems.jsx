import {
  AutoAwesome,
  Bloodtype,
  FamilyRestroom,
  Fort,
  Home,
  LiveTv,
  LocalMovies,
  MenuBook,
  MoodBad,
  PeopleAlt,
  Pool,
  Reorder,
  StarPurple500,
  VolunteerActivism,
} from '@mui/icons-material';

export const iconComponents = {
  AutoAwesome,
  Bloodtype,
  FamilyRestroom,
  Fort,
  LocalMovies,
  MenuBook,
  MoodBad,
  LiveTv,
  Pool,
  Reorder,
  StarPurple500,
  VolunteerActivism,
  Home,
  PeopleAlt,
};

export const MAIN_MENU = [
  { title: 'Home', icon: 'Home', url: '/' },
  { title: 'Movies', icon: 'LocalMovies', url: '/movies' },
  { title: 'Actors', icon: 'PeopleAltIcon', url: '/actors' },
];

export const TOP_LIST = [
  {
    title: 'TOP 100',
    icon: 'AutoAwesome',
    url: '/popular',
    value: 'TOP_POPULAR_MOVIES',
  },
  {
    title: 'TOP 250',
    icon: 'StarPurple500',
    url: '/popular250',
    value: 'TOP_250_MOVIES',
  },
  {
    title: 'Вампиры',
    icon: 'Bloodtype',
    url: '/vapiris',
    value: 'VAMPIRE_THEME',
  },
  { title: 'Комиксы', icon: 'MenuBook', url: '/comics', value: 'COMICS_THEME' },
  {
    title: 'Семейный',
    icon: 'FamilyRestroom',
    url: '/family',
    value: 'FAMILY',
  },
  {
    title: 'Романтика',
    icon: 'VolunteerActivism',
    url: '/romantic',
    value: 'LOVE_THEME',
  },
  { title: 'Зомби', icon: 'MoodBad', url: '/zobie', value: 'ZOMBIE_THEME' },
  {
    title: 'Катастрофы',
    icon: 'Pool',
    url: '/crash',
    value: 'CATASTROPHE_THEME',
  },
  {
    title: 'Популярные сериалы',
    icon: 'LiveTv',
    url: '/popserials',
    value: 'POPULAR_SERIES',
  },
];

export const MOVIE_LISTS = [
  { title: 'Фильмы', icon: 'LocalMovies', url: '/films' },
  { title: 'Сериалы', icon: 'Reorder', url: '/serials' },
  { title: 'Мультфильмы', icon: 'Fort', url: '/cartoons' },
];

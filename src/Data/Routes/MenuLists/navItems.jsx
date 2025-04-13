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
  { title: 'TOP 100', icon: 'AutoAwesome', url: '/popular100' },
  { title: 'TOP 250', icon: 'StarPurple500', url: '/popular250' },
  { title: 'Вампиры', icon: 'Bloodtype', url: '/vapiris' },
  { title: 'Комиксы', icon: 'MenuBook', url: '/comics' },
  { title: 'Семейный', icon: 'FamilyRestroom', url: '/family' },
  { title: 'Романтика', icon: 'VolunteerActivism', url: '/romantic' },
  { title: 'Зомби', icon: 'MoodBad', url: '/zobie' },
  { title: 'Катастрофы', icon: 'Pool', url: '/crash' },
  { title: 'Популярный сериалы', icon: 'LiveTv', url: '/popserials' },
];

export const MOVIE_LISTS = [
  { title: 'Фильмы', icon: 'LocalMovies', url: '/films' },
  { title: 'Сериалы', icon: 'Reorder', url: '/serials' },
  { title: 'Мультфильмы', icon: 'Fort', url: '/cartoons' },
];

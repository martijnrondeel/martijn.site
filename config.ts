import { repository } from './package.json';

export const siteConfig = {
  url: 'https://martijn.site',
  pathPrefix: '/',
  title: 'martijn.site',
  subtitle: 'Software engineer with an interest in the web, creative coding & more.',
  copyright: '',
  repo: repository,
  disqusShortname: 'martijn-site',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-22014814-11',
  useKatex: false,
  menu: [
    {
      label: 'Blog',
      path: '/blog',
    },
    {
      label: 'Projects',
      path: '/projects',
    },
  ],
  author: {
    name: 'Martijn Rondeel',
    photo: '/photo.jpg',
    bio: 'Software engineer with an interest in the web, creative coding & more.',
    contacts: {
      email: 'martijn@rondeel.email',
      facebook: '',
      telegram: '',
      twitter: 'martijnrondeel',
      github: 'martijnrondeel',
      rss: '',
      vkontakte: '',
      linkedin: 'martijnrondeel',
      instagram: 'martijnrondeel',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
    },
  },
};

import { repository } from './package.json';

export const siteConfig = {
  url: 'https://martijn.site',
  pathPrefix: '/',
  title: 'martijn.site',
  subtitle: 'Software engineer with passion for the web, creative coding & games.',
  copyright: '',
  repo: repository,
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-22014814-11',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/',
    },
    {
      label: 'About me',
      path: '/pages/about',
    },
    {
      label: 'Contact me',
      path: '/pages/contacts',
    },
  ],
  author: {
    name: 'Martijn Rondeel',
    photo: '/photo.jpg',
    bio: 'Software engineer with passion for the web, creative coding & games.',
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

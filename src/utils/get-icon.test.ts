import { getIcon } from './get-icon';
import { ICONS } from '../constants';

test('getIcon', () => {
  expect(getIcon('twitter')).toBe(ICONS.TWITTER);
  expect(getIcon('github')).toBe(ICONS.GITHUB);
  expect(getIcon('vkontakte')).toBe(ICONS.VKONTAKTE);
  expect(getIcon('telegram')).toStrictEqual(ICONS.TELEGRAM);
  expect(getIcon('email')).toStrictEqual(ICONS.EMAIL);
  expect(getIcon('rss')).toStrictEqual(ICONS.RSS);
  expect(getIcon('linkedin')).toStrictEqual(ICONS.LINKEDIN);
  expect(getIcon('instagram')).toStrictEqual(ICONS.INSTAGRAM);
  expect(getIcon('line')).toStrictEqual(ICONS.LINE);
  expect(getIcon('facebook')).toStrictEqual(ICONS.FACEBOOK);
  expect(getIcon('gitlab')).toStrictEqual(ICONS.GITLAB);
  expect(getIcon('weibo')).toStrictEqual(ICONS.WEIBO);
  expect(getIcon('codepen')).toStrictEqual(ICONS.CODEPEN);
  expect(getIcon('youtube')).toStrictEqual(ICONS.YOUTUBE);
  expect(getIcon('soundcloud')).toStrictEqual(ICONS.SOUNDCLOUD);
  expect(getIcon('non-existent')).toStrictEqual(ICONS.MISSING);
});

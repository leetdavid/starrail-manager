import { PUBLIC_HOYO_API_TOKEN, PUBLIC_HOYO_API_UID } from '$env/static/public';
import { HonkaiStarRail, LanguageEnum } from 'hoyoapi';

export const hsr = new HonkaiStarRail({
  cookie: PUBLIC_HOYO_API_TOKEN,
  lang: LanguageEnum.ENGLISH,
  uid: +PUBLIC_HOYO_API_UID,
});

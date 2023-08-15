import axios from "axios";
import * as cheerio from "cheerio";
import {
  Cookie,
  HTTPRequest,
  HonkaiStarRail,
  LanguageEnum,
  GamesEnum,
  IRedeemCode,
} from "hoyoapi";

const HSR_REDEEM_URL =
  "https://sg-hkrpg-api.hoyoverse.com/common/apicdkey/api/webExchangeCdkey";

export async function getHSRRedeemCodes(
  // sensible defaults
  redeemUrl: string = "https://www.prydwen.gg/star-rail/"
): Promise<string[]> {
  try {
    const { data: response } = await axios.get(redeemUrl);

    const $ = cheerio.load(response);
    const codes = $("p.code")
      .map((i, el) => $(el).clone().children().remove().end().text().trim())
      .get();

    return codes;
  } catch (error) {
    console.error(error);
  }
  return [];
}

export async function redeemHSRCode(
  hsr: HonkaiStarRail,
  code: string
): Promise<IRedeemCode> {
  const request = new HTTPRequest(Cookie.parseCookie(hsr.cookie));
  const lang = LanguageEnum.ENGLISH;
  const game = GamesEnum.HONKAI_STAR_RAIL;

  request.setLang(lang);

  request.setQueryParams({
    uid: hsr.uid,
    region: hsr.region,
    game_biz: game,
    cdkey: code.replace(/\uFFFD/g, ""),
    lang: lang.toString().split("-")[0],
    sLangKey: lang,
  });

  const { response } = await request.send(HSR_REDEEM_URL, "GET", 0);

  return response as IRedeemCode;
}

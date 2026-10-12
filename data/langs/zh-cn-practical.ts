import { FACTS as F } from "./_schema";
import type { PracticalPack } from "./_schema";

/**
 * 簡体字（/zh-cn/）の入国後実用ページ（英語 data/pages-practical.ts の15ページに対応・スラッグ同名）。
 * ファクト＝~/projects/kr-entry-facts-2026-10-12.md（生ログ raw-A〜D）
 *
 * 🚨 読者＝中国本土旅券。**韓国のビザ免除対象外＝ビザで入国＝K-ETAは無関係**（zh-cn.ts の冒頭参照）。
 *    → 入国申告書は必ず提出（ビザ所持者は提出対象）。「K-ETAを申請すれば申告書不要」と書かない。
 *    → 到着自動ゲート42か国・地域に中国本土は無い（香港・マカオは有り）。出国ゲートは17歳以上なら登録不要。
 * ⚠️ 香港・マカオ特区旅券＝ビザ免除＋K-ETA一時免除（2026-12-31まで）。該当箇所で別に書く。
 * ⚠️ 運転: 中国本土の免許/IDPの扱いは公式情報なし → 可否を断定しない（道路交通公団・レンタカー会社に確認を促す）。
 * ⚠️ 医療: 韓中社会保険協定は労働者の年金・雇用保険 → 観光客の医療は対象外。
 * ⚠️ 112（24h中国語通訳）・1330・1345 とも中国語あり。
 * ⚠️ 団体観光のビザ免除措置には触れない（zh-cn.ts 冒頭の注意参照）。
 * ⚠️ 数値は F 経由。表記だけローカライズした定数は FACTS と同じ値を指す。
 */

const CHECKED = "2026年10月12日";

const EXEMPT_UNTIL = "2026年12月31日"; // = F.exemptionUntil
const EGATE_SINCE = "2026年3月16日"; // = F.egateSince
const POWER_BANK_SINCE = "2026年4月20日"; // = F.powerBankSince
const LIQUID_ML = "100 毫升"; // = F.liquidMl
const LIQUID_BAG = "1 升"; // = F.liquidBag
const CASH_ADMIN_FINE_MAX = "5,000 万韩元"; // = F.cashAdminFineMax

const HUB = "arriving-in-korea";

export const zhCnPractical: PracticalPack = {
  ui: { faq: "常见问题", source: "出处", related: "相关内容" },
  articles: [
    {
      slug: HUB,
      enSlug: HUB,
      title: "抵达韩国：入境之后的实用指南",
      description: "无论持签证还是港澳护照免签入境，落地后的入境卡、通关、现金、退税、交通、医疗与紧急情况，均按韩国官方信息核对。",
      checked: CHECKED,
      practical: false,
      related: ["arrival-card-and-e-gates", "china-passport-korea-guide", "korea-entry-stay"],
      blocks: [
        {
          p: `持中国大陆护照赴韩，需要的是签证（K-ETA 不适用）；持香港或澳门特区护照，则可以免签入境，且到 ${EXEMPT_UNTIL} 前暂时免办 K-ETA。无论走哪条路，签证或免签解决的只是「能不能入境」这一个问题。至于在机场会遇到什么、可以携带什么、怎样付款、怎样出行、出了问题怎么办，这些页面逐一说明。每一页都对照了负责该事项的韩国政府机构，并附上链接。`,
        },
        { h2: "入境时" },
        { links: ["arrival-card-and-e-gates", "bringing-medicines", "travelling-with-children"] },
        { h2: "钱" },
        { links: ["money-and-tipping", "tax-refund-for-tourists"] },
        { h2: "交通与通讯" },
        { links: ["transport-cards", "driving-in-korea", "phones-and-sim-cards", "power-plugs", "public-holidays"] },
        { h2: "健康与安全" },
        { links: ["healthcare-for-visitors", "emergency-and-safety", "smoking-vaping-and-alcohol"] },
        { h2: "回程" },
        { links: ["airport-security-liquids"] },
        { h2: "签证、K-ETA 与停留天数" },
        { links: ["korea-visa-basics", "china-passport-korea-guide", "korea-entry-stay"] },
        {
          note: "我们没有单独写护照有效期。韩国法律要求持有有效护照，但我们没有找到官方对免签访客护照剩余有效期的最低要求——航空公司和转机国家可能另有规定。",
        },
      ],
    },
    {
      slug: "arrival-card-and-e-gates",
      enSlug: "arrival-card-and-e-gates",
      title: "韩国入境卡与自助通道：中国大陆护照要填卡，港澳护照可用自助通道",
      description: `持签证入境必须提交入境卡（可于抵达前 ${F.earrivalDaysBefore} 天起在线免费填写）。入境自助通道不对中国大陆护照开放，港澳 ${F.egateMinAge} 岁以上可登记。`,
      checked: CHECKED,
      practical: true,
      related: [HUB, "travelling-with-children", "korea-visa-basics", "keta-exemption-2026"],
      blocks: [
        {
          p: "抵达韩国时的流程取决于两件事：是否需要交入境卡，以及能否使用自动通关闸口代替人工柜台。",
        },
        { h2: "谁必须提交入境卡" },
        {
          p: "原则上，所有入境韩国的外国人都要提交入境卡。对访客而言，主要的例外只有一种：持有效 K-ETA 并免签入境的人不用填。其余的人都要填。",
        },
        {
          ul: [
            "持签证入境者（中国大陆护照属于这一类）——必须提交（即使碰巧持有 K-ETA，只要是凭签证入境，也要提交）",
            `在 K-ETA 一时免除名单内的国家和地区的国民（至 ${EXEMPT_UNTIL}，香港、澳门特区护照也在其中）——必须提交`,
            `入境当日 ${F.ketaChildMaxAge} 岁以下或 ${F.ketaSeniorMinAge} 岁以上、因年龄免办 K-ETA 的人——必须提交`,
            "持有效 K-ETA 并免签入境者——不用提交",
          ],
        },
        {
          note: `中国大陆护照不适用 K-ETA，所以没有「办 K-ETA 免填入境卡」这个选项——入境卡照填即可，免费，几分钟就能完成。只有港澳特区护照持有人这类免签旅客，才可以在免除期间自愿申请 K-ETA（${F.fee}）来省掉入境卡；值不值得由您自己判断。`,
        },
        { h2: "电子入境卡（e-Arrival card）" },
        {
          ul: [
            `在 e-arrivalcard.go.kr 填写，抵达前 ${F.earrivalDaysBefore} 天起可以提交，按韩国时间计算并包含抵达当天（31 日抵达：可在 29、30、31 日提交）`,
            "免费。官方网站支持电脑和手机网页，没有 App",
            "与纸质入境卡效力相同，仍可选择填写纸质卡",
            `提交后 ${F.earrivalValidHours} 小时失效，通过入境审查后也会失效——每次入境都要重新提交`,
            "落地后、走到入境审查柜台之前，仍然可以填写",
            "它和 K-ETA 是不同的系统。把两者捆绑在一起收费的网站并非官方网站",
          ],
        },
        { source: { label: "韩国法务部 — 电子入境卡指南", url: "https://www.e-arrivalcard.go.kr/portal/guide/eacGuide.do" } },
        { source: { label: "韩国法务部 — 电子入境卡的提交对象", url: "https://www.e-arrivalcard.go.kr/portal/guide/eacTargetGuide.do" } },
        { h2: "指纹与面部照片" },
        {
          p: `年满 ${F.biometricsMinAge} 岁的外国人入境韩国时，要扫描双手食指指纹并拍摄面部照片。未满 ${F.biometricsMinAge} 岁的儿童免除。`,
        },
        { source: { label: "韩国出入境外国人政策本部 — 外国人指纹确认制度", url: "https://www.immigration.go.kr/immigration/2429/subview.do" } },
        { h2: "入境自助通道" },
        {
          p: `自 ${EGATE_SINCE} 起，${F.egateCountries} 个国家和地区的 ${F.egateMinAge} 岁以上免签访客可以在抵达时现场登记，之后使用入境自助通道。名单包括香港、澳门、台湾、日本、新加坡、阿联酋、欧盟与申根国家、英国、加拿大、墨西哥、澳大利亚和新西兰。中国大陆不在名单内，持中国大陆护照入境请走人工柜台。`,
        },
        {
          ul: [
            "登记柜台设在仁川机场（第一、第二航站楼）和济州机场的入境审查大厅",
            "步骤：扫描护照、登记指纹、登记面部——然后即可使用闸口",
            "登记一次后，以后再访韩时也可以使用，包括其他机场",
          ],
        },
        { h2: "出境自助通道" },
        {
          p: `离境时简单得多：${F.egateMinAge} 岁以上的短期访客无需事先登记即可使用出境自助通道。`,
        },
        { source: { label: "韩国法务部新闻稿（2026年3月16日）— 入境自助通道扩大至 42 个国家和地区（韩文，PDF）", url: "https://www.immigration.go.kr/bbs/moj/182/491982/download.do" } },
        { source: { label: "韩国出入境外国人政策本部 — 自动出入境审查（SES）", url: "https://www.immigration.go.kr/immigration/1527/subview.do" } },
        {
          note: "使用自助通道不会改变您的停留条件。持签证者的停留天数以签证为准；港澳护照免签者以免签安排为准。K-ETA 也不是使用闸口的条件。",
        },
      ],
      faq: [
        {
          q: "持中国大陆护照入境韩国要填入境卡吗？",
          a: "要。中国大陆护照凭签证入境，签证持有人必须提交入境卡——可在线填写电子入境卡（免费），也可以填纸质卡。",
        },
        {
          q: "中国大陆护照可以使用韩国的入境自助通道吗？",
          a: `不可以。${EGATE_SINCE} 起开放现场登记的 ${F.egateCountries} 个国家和地区中没有中国大陆（香港、澳门在内）。出境自助通道则对 ${F.egateMinAge} 岁以上的短期访客开放，无需登记。`,
        },
        {
          q: "电子入境卡和 K-ETA 是一回事吗？",
          a: `不是。电子入境卡是针对一次入境的免费入境申报；K-ETA 是收费的旅行许可，有效期最长 ${F.validYears} 年，而且只面向免签旅客。官方网站对此有明确说明。`,
        },
      ],
    },
    {
      slug: "airport-security-liquids",
      enSlug: "airport-security-liquids",
      title: `从韩国离境：${LIQUID_ML}液体规定与充电宝每人 ${F.powerBankMax} 个的上限`,
      description: `随身液体：每个容器不超过 ${LIQUID_ML}，装入一个 ${LIQUID_BAG}密封袋。${POWER_BANK_SINCE}起充电宝每人最多 ${F.powerBankMax} 个，机上不得充电。`,
      checked: CHECKED,
      practical: true,
      related: [HUB, "tax-refund-for-tourists", "bringing-medicines"],
      blocks: [
        {
          p: "韩国机场的液体安检规定与国际通行规则相同。2026 年的变化在于充电宝：韩国如今的规定是最严格的之一，并已被采纳为国际标准。",
        },
        { h2: "随身行李中的液体（国际航班）" },
        {
          ul: [
            `每个容器 ${LIQUID_ML}以下——按容器的容量判断，而不是里面还剩多少`,
            `所有容器装入一个透明、可密封的塑料袋，每人一个，容量不超过 ${LIQUID_BAG}`,
            "液体或膏状的食品也算——包括辣椒酱和泡菜",
            "韩国国内航班没有液体限制",
          ],
        },
        { h2: "例外" },
        {
          ul: [
            `${F.babyItemsMaxAge} 岁以下儿童的婴儿用品——奶、水、果汁、婴儿食品、湿巾——限飞行途中所需的量`,
            `超过 ${LIQUID_ML}的液体药品（例如胰岛素），需附韩文或英文的医生证明或处方，限机上所需的量；其余放进托运行李`,
            "免税店购买的液体不限容量，但必须装在免税店的密封袋中，在登上前往最终目的地的航班前不得拆开",
          ],
        },
        {
          note: "如果在其他机场转机，就适用该机场的规定，即使仁川机场放行，液体也可能在那里被没收。为后续航班购买免税品前，请先向航空公司确认。",
        },
        { source: { label: "仁川国际机场 — 限制携带物品（韩文）", url: "https://www.airport.kr/ap_ko/906/subview.do" } },
        { source: { label: "仁川国际机场 — 限制携带物品常见问题（韩文）", url: "https://www.airport.kr/ap_ko/907/subview.do" } },
        { h2: `${POWER_BANK_SINCE}起的充电宝规定` },
        {
          ul: [
            `每人最多 ${F.powerBankMax} 个充电宝，每个不超过 ${F.powerBankWh}`,
            "100 Wh 至 160 Wh 的充电宝需经航空公司批准；超过 160 Wh 的一律不得携带",
            "只能随身携带——充电宝不得放入托运行李",
            "机上不得给充电宝充电，也不得用它给手机或其他设备充电",
          ],
        },
        {
          p: "韩国是在 2025 年 1 月釜山航空客机发生充电宝起火事故后出台这项规定的。国际民用航空组织（ICAO）于 2026 年 3 月 27 日将其纳入危险品技术细则。部分国家和地区已实行更严格的规定，回程航段也请确认航空公司的限制。",
        },
        { source: { label: "韩国国土交通部 — 充电宝规定（2026年4月8日，韩文）", url: "https://www.molit.go.kr/USR/NEWS/m_71/dtl.jsp?lcmspage=1&id=95091874" } },
        {
          note: "您可能看到过「韩国机场因引进新型安检机而放宽了液体限制」的说法。我们在国土交通部和仁川机场的网站上都没有找到相关内容，两者仍写明 100 毫升规定——请按此准备。",
        },
      ],
      faq: [
        {
          q: "泡菜可以放在随身行李里吗？",
          a: `只能装在 ${LIQUID_ML}以下的容器里，并放进 ${LIQUID_BAG}的透明袋——仁川机场把它视为液体食品。更多的量请放进托运行李。`,
        },
        {
          q: "从韩国出发的航班可以带几个充电宝？",
          a: `${POWER_BANK_SINCE}起：每人最多 ${F.powerBankMax} 个，每个不超过 ${F.powerBankWh}，只能随身携带，飞行中不得充电或使用。`,
        },
      ],
    },
    {
      slug: "money-and-tipping",
      enSlug: "money-and-tipping",
      title: `韩国的钱：韩元、银行卡、小费，以及超过 ${F.cashDeclareOver} 的现金`,
      description: `银行卡普遍可用，传统市场可能只收现金，不需要给小费。外币、韩元现金与支票合计超过 ${F.cashDeclareOver} 须在入境时申报。`,
      checked: CHECKED,
      practical: true,
      related: [HUB, "tax-refund-for-tourists", "transport-cards"],
      blocks: [
        { p: "韩国的货币是韩元（KRW，₩）。纸币有 1,000、5,000、10,000 和 50,000 韩元；硬币有 10、50、100 和 500 韩元。" },
        { h2: "银行卡与现金" },
        {
          ul: [
            "据韩国观光公社介绍，大多数商店、酒店和百货商店都接受 Visa、Mastercard、American Express、JCB 和银联卡",
            "传统市场和路边摊可能只收现金——请带一些现金",
            "可充值的预付交通卡（如 T-money）也可以在显示该卡标志的加盟商店付款",
            "请在银行或正规外币兑换处换钱；银行一般在工作日 09:00–16:00 营业",
          ],
        },
        { source: { label: "韩国观光公社 — 货币与兑换（英文）", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140040" } },
        { h2: "小费" },
        {
          p: "韩国观光公社说得很明白：在韩国不需要、也没有人期待小费。餐厅里加水、续小菜都是免费的。",
        },
        { source: { label: "韩国观光公社 — 关于韩国饮食（英文）", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140727" } },
        { h2: `携带超过 ${F.cashDeclareOver}` },
        {
          p: `如果您携带的外币、韩元纸币和支票（包括韩元银行本票）合计超过 ${F.cashDeclareOver}，必须在入境时向海关申报。在旅客申报单上勾选第 3 项并填写金额，海关会发给您申报确认书。离开入境区域后就无法补发，所以请在入境时办理。`,
        },
        {
          ul: [
            "这是申报义务，不是携带上限——申报后可以携带更多",
            `未申报最高可处 ${CASH_ADMIN_FINE_MAX}罚款（行政罚款）`,
            `未申报金额超过 ${F.cashCriminalOver} 的，构成刑事犯罪（最高一年徒刑或罚金）`,
            "离开韩国时，访客可以在入境申报的金额以内携带出境，无需再次申报",
          ],
        },
        { source: { label: "韩国关税厅 — 外币申报（英文）", url: "https://www.customs.go.kr/english/cm/cntnts/cntntsView.do?mi=10800&cntntsId=5500" } },
        { source: { label: "外汇交易法（韩文）", url: "https://www.law.go.kr/법령/외국환거래법" } },
      ],
      faq: [
        { q: "在韩国餐厅要给小费吗？", a: "不用。韩国观光公社表示，在韩国不需要、也没有人期待小费。" },
        {
          q: "可以带多少现金入境韩国？",
          a: `没有上限，但如果外币、韩元纸币和支票合计超过 ${F.cashDeclareOver}，必须在入境时向海关申报。`,
        },
      ],
    },
    {
      slug: "tax-refund-for-tourists",
      enSlug: "tax-refund-for-tourists",
      title: `韩国游客退税：${F.taxRefundMin} 起退，以及当场退税`,
      description: `在退税商店单笔消费满 ${F.taxRefundMin} 可退增值税。当场退税：单笔未满 ${F.immediateRefundPerPurchase}，每次入境合计 ${F.immediateRefundTotal} 以内。`,
      checked: CHECKED,
      practical: true,
      related: [HUB, "money-and-tipping", "airport-security-liquids"],
      blocks: [
        {
          p: "韩国的标价已含增值税。外国游客把商品带出韩国时可以退税，前提是在参与退税的商店购买，并在规定期限内把商品带出境。",
        },
        { h2: "谁可以退税" },
        {
          ul: [
            "非居民——韩国观光公社的说明是在韩国停留未满六个月的外国人",
            "韩国居民、企业、驻韩外交官和军人不适用",
          ],
        },
        { h2: "规则" },
        {
          ul: [
            `在提供退税的商店，单笔消费满 ${F.taxRefundMin}（含税）`,
            `商品须在购买后 ${F.taxRefundExportMonths} 个月内带出韩国`,
            "烟草不在退税范围内，致瘾性药品以及禁止进出口的物品也不适用",
          ],
        },
        { h2: "当场（即时）退税" },
        {
          p: `很多商店会在结账时直接扣除税款。条件是单笔消费未满 ${F.immediateRefundPerPurchase}，且此次行程中当场退税的消费合计不超过 ${F.immediateRefundTotal}。超过的部分改为事后申请退税。`,
        },
        { h2: "在机场或市内办理" },
        {
          ul: [
            "离境时请准备好护照、购物收据和商品（未拆封、未使用）——海关可能要求查看",
            "设有海关自助机的机场：在自助机上输入护照和收据信息；只有被选中查验时才需要去海关柜台",
            `市内退税点每张收据限 ${F.downtownRefundCap} 以内；机场和港口码头的退税柜台没有上限`,
          ],
        },
        { source: { label: "韩国关税厅 — 退税（英文）", url: "https://www.customs.go.kr/english/cm/cntnts/cntntsView.do?mi=10803&cntntsId=5504" } },
        { source: { label: "韩国观光公社 — 免税与退税（英文）", url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140736" } },
        { source: { label: "外国游客增值税及个别消费税特例规定——总统令（韩文）", url: "https://www.law.go.kr/법령/외국인관광객 등에 대한 부가가치세 및 개별소비세 특례규정" } },
        {
          note: "退税金额请在商店确认，不要依赖攻略：金额因商品和退税运营商而异，我们没有找到可以引用的官方退税额表。",
        },
      ],
      faq: [
        { q: "在韩国退税的最低消费是多少？", a: `在参与退税的商店，单笔消费 ${F.taxRefundMin}（含税）。` },
        {
          q: "可以在店里直接退税吗？",
          a: `可以，前提是该店提供当场退税，单笔消费未满 ${F.immediateRefundPerPurchase}，且此次行程当场退税合计不超过 ${F.immediateRefundTotal}。`,
        },
      ],
    },
    {
      slug: "bringing-medicines",
      enSlug: "bringing-medicines",
      title: "携带药品入境韩国：哪些药需要出发前获得批准",
      description: `普通药品：最多 ${F.medsBottles} 瓶或 ${F.medsMonths} 个月用量。多动症药、可待因、安眠药等管制类药品须事先获得批准。`,
      checked: CHECKED,
      practical: true,
      related: [HUB, "healthcare-for-visitors", "airport-security-liquids"],
      blocks: [
        {
          p: "大多数旅客只带几盒普通药品，不必担心。但也有少数人带的药在韩国法律上属于管制物质——往往是在本国很常见的药——这类药需要在出发前获得许可，而不是到了机场再解释。",
        },
        { h2: "自用的普通药品" },
        {
          ul: [
            `最多 ${F.medsBottles} 瓶，或按处方用量最多 ${F.medsMonths} 个月的量`,
            `计入 ${F.customsGoodsAllowance} 的免税额度之内——不是在额度之外另算`,
            "海关认为可能被滥用的部分药品（例如某些勃起功能障碍类产品）仅限凭韩国医生处方",
          ],
        },
        { source: { label: "仁川本部海关 — 入境时携带药品（韩文）", url: "https://www.customs.go.kr/incheon/cm/cntnts/cntntsView.do?mi=10784&cntntsId=5480" } },
        { h2: "含麻醉或精神药物成分的药品" },
        {
          p: "只要药品含有麻醉或精神药物成分，即使在您所在的地方是非处方药或由医生开具，韩国法律也按麻醉/精神药物对待。未经韩国食品药品安全处（MFDS）事先批准携带入境，可能被起诉。",
        },
        {
          p: "韩国关税厅列举的成分包括：",
        },
        {
          ul: [
            "可待因、吗啡、羟考酮、他喷他多、美沙酮",
            "哌甲酯和苯丙胺类——常见的多动症（ADHD）药物",
            "唑吡坦、阿普唑仑、地西泮、劳拉西泮、氯硝西泮——安眠药和镇静药",
            "右美沙芬——见于部分止咳和感冒药",
          ],
        },
        { h2: "如何获得批准" },
        {
          ul: [
            "出发前通过 MFDS 的 nedrug.mfds.go.kr 网站在线申请（自我治疗用麻醉药品携带入境申请）",
            "需要旅行证件复印件、写明药品名称、数量、停留期间和目的的文件，以及医生（韩国或外国医疗机构）的诊断书——或出发国政府签发的出口许可",
            "这项规定对韩国人和外国人一视同仁",
          ],
        },
        { source: { label: "韩国关税厅 — 含麻醉成分的药品（韩文）", url: "https://www.customs.go.kr/kcs/cm/cntnts/cntntsView.do?mi=13807&cntntsId=7640" } },
        { source: { label: "韩国食品药品安全处 — 自我治疗用麻醉药品携带入境", url: "https://www.mfds.go.kr/brd/m_74/view.do?seq=43906" } },
        { h2: "大麻与 CBD" },
        {
          p: "所有大麻制品——包括 CBD 油和电子烟烟弹——携带入境韩国都会受到刑事处罚，即使在原居住地是合法的。",
        },
        {
          note: "我们不知道 MFDS 审批需要多久，它也没有公布处理时间。请尽早申请；如果不确定某种成分是否受管制，出发前先向 MFDS 询问。",
        },
      ],
      faq: [
        {
          q: "可以带多动症（ADHD）药物去韩国吗？",
          a: "哌甲酯和苯丙胺类在韩国属于管制药品。出发前须凭医生诊断书在线申请，获得韩国食品药品安全处的批准。",
        },
        {
          q: "韩国允许携带 CBD 油吗？",
          a: "不允许。韩国关税厅表示，包括 CBD 油和电子烟烟弹在内的所有大麻制品，携带入境都会受到刑事处罚。",
        },
      ],
    },
    {
      slug: "smoking-vaping-and-alcohol",
      enSlug: "smoking-vaping-and-alcohol",
      title: `韩国的吸烟、电子烟与饮酒：按出生年份算满 ${F.customsAgeMin} 岁，违规罚款 ${F.smokingFine}`,
      description: `从满 ${F.customsAgeMin} 岁那一年起可以购买烟酒。在禁烟区吸烟或用电子烟罚款 ${F.smokingFine}。酒驾标准为血液酒精浓度 ${F.bacLimit}。`,
      checked: CHECKED,
      practical: true,
      related: [HUB, "driving-in-korea", "bringing-medicines"],
      blocks: [
        { h2: "法定年龄" },
        {
          p: `禁止向未满 ${F.customsAgeMin} 岁者出售酒类和烟草。韩国按出生年份计算：从年满 ${F.customsAgeMin} 岁那一年的 1 月 1 日起，即视为成年。卖方必须核对年龄和身份，所以请随身携带护照。`,
        },
        { source: { label: "青少年保护法（韩文）", url: "https://www.law.go.kr/법령/청소년 보호법" } },
        { h2: "哪里不能吸烟" },
        {
          p: "韩国公共生活的大部分场所依法禁烟。《国民健康增进法》将以下设施整体列为禁烟区，包括：",
        },
        {
          ul: [
            "机场、车站和巴士客运站的候车室与站台、地下通道以及较大型的交通工具",
            "酒店及其他旅游住宿设施",
            "超过一定面积的餐厅、咖啡馆和面包店",
            "医院、学校和公共浴池",
            "地方政府以条例另行指定的场所——常见的有公园、公交车站和街道",
          ],
        },
        {
          p: `在禁烟区吸烟罚款 ${F.smokingFine}（地方条例指定的区域为该金额以内）。`,
        },
        { h2: "电子烟同样算" },
        {
          p: "自 2026 年 4 月 24 日起，韩国法律将以天然或合成尼古丁制成的产品都定义为烟草。韩国保健福祉部确认，合成尼古丁电子烟与香烟适用相同的禁烟规定。",
        },
        { source: { label: "韩国保健福祉部 — 合成尼古丁电子烟（2026年6月23日，韩文）", url: "https://mohw.go.kr/board.es?act=view&bid=0027&list_no=1490975&mid=a10503010100&nPage=1&tag=" } },
        { source: { label: "国民健康增进法（韩文）", url: "https://www.law.go.kr/법령/국민건강증진법" } },
        { h2: "在公共场所饮酒" },
        {
          p: "韩国没有全国性的公共场所禁酒规定。地方政府可以通过条例划定禁酒区，最高罚款 10 万韩元，所以在公园等场所请留意标志。",
        },
        { h2: "酒后驾驶" },
        {
          p: `标准是血液酒精浓度 ${F.bacLimit}——比许多国家更低——并且同样适用于自行车。`,
        },
        { source: { label: "道路交通法（韩文）", url: "https://www.law.go.kr/법령/도로교통법" } },
        {
          note: `携带香烟或酒类入境韩国适用海关免税额度（香烟 ${F.customsCigarettes} 支；酒类 ${F.customsAlcoholLitres} 升以内且不超过 ${F.customsAlcoholValue}），未满 ${F.customsAgeMin} 岁的旅客两者都没有免税额度。`,
        },
      ],
      faq: [
        { q: "韩国的饮酒年龄是多少？", a: `${F.customsAgeMin} 岁，按出生年份计算：从年满 ${F.customsAgeMin} 岁那一年的 1 月 1 日起可以购买烟酒。` },
        { q: "禁烟的地方可以用电子烟吗？", a: "不可以。电子烟（包括合成尼古丁烟油）被视为烟草，不得在禁烟区使用。" },
      ],
    },
    {
      slug: "travelling-with-children",
      enSlug: "travelling-with-children",
      title: "带孩子去韩国：入境卡由父母代填，以及入境与回程时的不同之处",
      description: `持签证入境的孩子也要提交入境卡，由父母代填。未满 ${F.biometricsMinAge} 岁免按指纹，自助通道限 ${F.egateMinAge} 岁以上，婴儿液体另有例外。`,
      checked: CHECKED,
      practical: true,
      related: [HUB, "arrival-card-and-e-gates", "airport-security-liquids", "keta-eligibility-china"],
      blocks: [
        {
          p: "持中国大陆护照的孩子和大人一样凭签证入境，K-ETA 与他们无关，因此也谈不上「按年龄免办 K-ETA」。对家庭来说，真正需要准备的是下面这几件事。",
        },
        { h2: "入境卡：孩子也要交" },
        {
          p: "签证持有人必须提交入境卡，孩子也不例外——可在线填写电子入境卡，也可以填纸质卡。未满 14 岁的孩子不能作为代表申报人，所以由父母为全家填写；超过 9 人的团体申报只能在电脑上进行。",
        },
        { source: { label: "韩国法务部 — 电子入境卡的提交对象", url: "https://www.e-arrivalcard.go.kr/portal/guide/eacTargetGuide.do" } },
        { h2: "入境审查时" },
        {
          ul: [
            `未满 ${F.biometricsMinAge} 岁的儿童入境时不需要按指纹和拍摄面部照片`,
            `入境自助通道只对 ${F.egateMinAge} 岁以上的访客开放，且中国大陆护照不在名单内——全家都走人工柜台。港澳护照家庭通常是大人走闸口、孩子走人工柜台`,
          ],
        },
        { h2: "回程飞机上" },
        {
          p: `${F.babyItemsMaxAge} 岁以下儿童的婴儿用品——奶、水、果汁、婴儿食品、湿巾——可以超过 ${LIQUID_ML}带进客舱，限飞行途中所需的量。`,
        },
        { h2: "持港澳特区护照的家庭" },
        {
          p: `港澳特区护照免签入境，目前在 K-ETA 一时免除名单内（至 ${EXEMPT_UNTIL}）。此外，自 2023 年 7 月 3 日起，入境当日 ${F.ketaChildMaxAge} 岁以下（以及 ${F.ketaSeniorMinAge} 岁以上）的旅客本来就免办 K-ETA，以入境日的年龄为准：入境前已满 18 岁的青少年，在免除期结束后需要自己的 K-ETA。没有 K-ETA 的孩子同样要提交入境卡。`,
        },
        { source: { label: "K-ETA — 关于年龄免除的公告（韩文）", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=175266&esntlPnotiMtYn=Y" } },
        {
          note: "我们没有找到韩国官方关于儿童单独出行或只随父母一方出行时须持父母同意书的要求。航空公司或签证申请时仍可能要求，请事先向他们确认。",
        },
      ],
      faq: [
        { q: "孩子需要 K-ETA 吗？", a: `持中国大陆护照的孩子不适用 K-ETA，凭签证入境。持港澳特区护照的孩子目前在一时免除名单内（至 ${EXEMPT_UNTIL}），而且入境当日 ${F.ketaChildMaxAge} 岁以下本来就免办。` },
        { q: "孩子需要提交入境卡吗？", a: "需要。持签证入境的孩子（以及没有 K-ETA 的孩子）都要提交入境卡；父母可以在电子入境卡网站上为孩子代填。" },
      ],
    },
    {
      slug: "transport-cards",
      enSlug: "transport-cards",
      title: "韩国出行：T-money、不收现金的公交，以及首尔气候同行卡",
      description: "一张预付卡几乎能坐遍所有公共交通。很多公交不收现金；2026年10月1日起，首尔气候同行卡短期券只限首尔市内使用。",
      checked: CHECKED,
      practical: true,
      related: [HUB, "money-and-tipping", "phones-and-sim-cards"],
      blocks: [
        {
          p: "韩国是少数几个一张预付卡就能在几乎所有地方乘坐公交、地铁和出租车的国家之一。对游客来说，第一天买一张是最有用的事。",
        },
        { h2: "T-money 与 EZL 卡" },
        {
          ul: [
            "据韩国观光公社介绍，T-money 和 EZL 卡几乎可用于韩国所有公共交通：地铁、市内公交、高速和城际巴士、出租车以及火车",
            "全国便利店和首尔地铁（1–8 号线）服务中心有售；卡本身 3,000–5,000 韩元",
            "可在地铁售票机或便利店充值",
            "用卡支付可享受公交与地铁换乘优惠；现金支付没有",
          ],
        },
        { source: { label: "韩国观光公社 — 交通卡（英文）", url: "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140663" } },
        { h2: "很多公交不收现金" },
        {
          p: "韩国各城市的公交正逐步改为无现金运营。首尔列出 183 条无现金线路（2026 年 1 月），其他首尔公交仍收现金。韩国观光公社表示，仁川、大邱和光州的市内公交全部不收现金。免费换乘规则也因城市而异——首尔最多可免费换乘四次，釜山两次。",
        },
        { source: { label: "首尔市政府 — 无现金公交线路（2026年1月，韩文）", url: "https://news.seoul.go.kr/traffic/archives/508898" } },
        { source: { label: "韩国观光公社 — 市内公交（英文）", url: "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140659" } },
        { h2: "首尔气候同行卡短期券" },
        {
          ul: [
            "1、2、3、5 或 7 天不限次乘坐，价格 5,000 至 20,000 韩元，实体卡另需 3,000 韩元",
            "充值后即开始计算——不能提前充值留到以后某天使用",
            "2026 年 10 月 1 日起，适用范围为首尔市内地铁、首尔市许可的市内公交和小区公交（含深夜公交和循环公交），以及在仁川机场第一、第二航站楼下车",
            "以前包括在内的首尔以外地区——金浦、高阳、果川、九里、城南、河南、南杨州等——不再适用",
            "自 2026 年 3 月 17 日起，首尔地铁 1–8 号线的新型售票机接受境外 Visa 和 Mastercard 购买及充值短期券，平均手续费 3.7%",
          ],
        },
        { source: { label: "首尔市政府 — 气候同行卡短期券 2026年10月1日起的适用范围（韩文）", url: "https://news.seoul.go.kr/traffic/archives/519012" } },
        { source: { label: "首尔市政府 — 2026年3月17日起售票机可用境外银行卡（韩文）", url: "https://news.seoul.go.kr/traffic/archives/516544" } },
        {
          note: "部分网页（包括一些官方英文页面）仍在介绍气候同行卡的旧适用范围，并称不能使用境外银行卡。以上首尔市 2026 年的公告才是现行信息。",
        },
      ],
      faq: [
        { q: "T-money 在首尔以外能用吗？", a: "能。韩国观光公社表示，T-money 和 EZL 卡几乎可用于全国所有公共交通，包括出租车和火车。" },
        { q: "在韩国坐公交可以付现金吗？", a: "不一定。很多市内公交不收现金——首尔有 183 条线路，据韩国观光公社介绍，仁川、大邱和光州的市内公交全部不收现金。请先买一张交通卡。" },
      ],
    },
    {
      slug: "phones-and-sim-cards",
      enSlug: "phones-and-sim-cards",
      title: "在韩国办 SIM 卡或 eSIM：请带上护照",
      description: "韩国电信运营商必须核实身份，对访客来说就是护照。在哪里买预付 SIM 卡或 eSIM，以及 2026 年的变化。",
      checked: CHECKED,
      practical: true,
      related: [HUB, "transport-cards", "emergency-and-safety"],
      blocks: [
        { h2: "在哪里买" },
        {
          ul: [
            "仁川、金浦、金海和济州等主要国际机场设有韩国运营商的漫游中心，出售预付 SIM（USIM）卡，也可领取网上预订的卡",
            "仁川机场第一航站楼到达层，三家运营商都有 24 小时营业的漫游中心",
            "主要连锁便利店也出售实体 USIM 卡，但各门店库存不一",
            "eSIM 在网上购买，扫描二维码即可设置——请先确认手机支持 eSIM",
          ],
        },
        { source: { label: "韩国观光公社 — 电力与通讯（英文）", url: "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140041" } },
        { source: { label: "仁川国际机场 — 通讯设施（英文）", url: "https://www.airport.kr/ap_en/1536/subview.do" } },
        { h2: "法律要求核实身份" },
        {
          p: "韩国法律要求电信运营商（包括通过代理商和门店）核实每一位开通服务者的身份，如果您拒绝，运营商可以拒绝办理。对外国人来说，护照是可以使用的证件之一。买 SIM 卡时请随身携带。",
        },
        { source: { label: "电信事业法施行令第37条之7（韩文）", url: "https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=290813&chrClsCd=010202&urlMode=lsInfoP&efYd=20261001&ancYnChk=0" } },
        { h2: "2026 年的变化" },
        {
          ul: [
            "韩国正在收紧手机开户以打击诈骗。2026 年 7 月 6 日起分阶段实施人脸核验，适用于使用韩国居民身份证或驾照开户的情况",
            "科学技术信息通信部表示，外国人凭护照可开通的线路数已从两条减为一条",
            "该部计划于 2026 年下半年将照片核验扩大到外国人登录证，2027 年扩大到护照",
          ],
        },
        { source: { label: "韩国科学技术信息通信部 — 防止手机滥用措施（2026年6月30日，韩文）", url: "https://www.msit.go.kr/bbs/view.do?sCode=user&mId=307&mPid=208&bbsSeqNo=94&nttSeqNo=3187497" } },
        {
          note: "我们不列价格，也不推荐卖家。某款纯流量 eSIM 是否要求护照取决于具体产品；法律规定的身份核实适用于与韩国电信运营商签订的合约。",
        },
      ],
      faq: [
        { q: "在韩国买 SIM 卡需要护照吗？", a: "需要。韩国法律要求电信运营商核实用户身份，对外国人来说护照是可以使用的证件。" },
        { q: "在仁川机场可以买 SIM 卡吗？", a: "可以。仁川机场各运营商的漫游中心出售预付 SIM 卡；第一航站楼到达层三家运营商都有 24 小时营业的中心。" },
      ],
    },
    {
      slug: "power-plugs",
      enSlug: "power-plugs",
      title: "韩国的插头与电压：220 V、60 Hz、双圆脚",
      description: "韩国插座使用双圆脚插头，电压 220 伏、频率 60 赫兹。中国大陆的扁脚插头需要转换插头；插电前先看充电器标签。",
      checked: CHECKED,
      practical: true,
      related: [HUB, "phones-and-sim-cards"],
      blocks: [
        {
          p: "韩国的标准电压为 220 伏、60 赫兹，家用插座是两个圆孔。江陵市的旅游网页将这种插座类型称为 C 型和 F 型，与德国、法国、奥地利、西班牙和希腊相同。",
        },
        { h2: "这对您的电器意味着什么" },
        {
          ul: [
            "欧洲大陆的插头一般无需转换即可使用",
            "扁脚插头——中国大陆、台湾、英国、美国等许多地方使用的——需要转换插头",
            "看充电器上的标签：如果写着 INPUT 100–240V，就可以在 220 V 下使用。如果只写 110 V 或 120 V，则不适用于韩国电压",
            "酒店可能出借或出售转换插头；机场、较大的商店和便利店也有售",
          ],
        },
        { source: { label: "韩国观光公社 — 电力与通讯（英文）", url: "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140041" } },
        { source: { label: "电气事业法施行规则附表3 — 标准电压与频率（韩文，PDF）", url: "https://www.law.go.kr/LSW/flDownload.do?gubun=&flSeq=168742119&bylClsCd=110201" } },
      ],
      faq: [
        { q: "韩国用什么插头？", a: "双圆脚插头（C 型和 F 型）——与欧洲大陆大部分地区相同。电压 220 V、频率 60 Hz。" },
        { q: "中国大陆的充电器在韩国能用吗？", a: "需要转换插头（扁脚插不进韩国插座）。手机和笔记本电脑的充电器大多标注 100–240 V，可以在 220 V 下使用；插电前请先看标签上的 INPUT 一栏。" },
      ],
    },
    {
      slug: "public-holidays",
      enSlug: "public-holidays",
      title: "韩国公休日：2026 年剩余部分与 2027 年",
      description: "韩国 2026 年底及 2027 年全年的官方公休日，包括春节（설날）、中秋（추석）和补休日，以及 2026 年新增的两个公休日。",
      checked: CHECKED,
      practical: true,
      related: [HUB, "transport-cards", "korea-entry-stay"],
      blocks: [
        {
          p: "韩国的公休日由法律规定，农历节日每年日期不同。政府每年在官报上公布当年的官方历书。2026 年有两项变化值得注意：劳动节（5 月 1 日）成为公休日；所有国家纪念日也都成为公休日，制宪节（7 月 17 日）因此恢复。",
        },
        { h2: "2026 年剩余部分" },
        { ul: ["12 月 25 日（周五）— 圣诞节"] },
        { h2: "2027 年（官方历书）" },
        {
          ul: [
            "1 月 1 日（周五）— 元旦",
            "2 月 6–8 日（周六至周一）— 春节（설날），2 月 9 日（周二）补休",
            "3 月 1 日（周一）— 三一节",
            "5 月 1 日（周六）— 劳动节，5 月 3 日（周一）补休",
            "5 月 5 日（周三）— 儿童节",
            "5 月 13 日（周四）— 佛诞日",
            "6 月 6 日（周日）— 显忠日（无补休）",
            "7 月 17 日（周六）— 制宪节，7 月 19 日（周一）补休",
            "8 月 15 日（周日）— 光复节，8 月 16 日（周一）补休",
            "9 月 14–16 日（周二至周四）— 中秋（추석）",
            "10 月 3 日（周日）— 开天节，10 月 4 日（周一）补休",
            "10 月 9 日（周六）— 韩文日，10 月 11 日（周一）补休",
            "12 月 25 日（周六）— 圣诞节，12 月 27 日（周一）补休",
          ],
        },
        { source: { label: "韩国宇宙航空厅 — 2027 年官方历书，官报公告第 2026-0078 号（韩文）", url: "https://astro.kasi.re.kr/kor/life/post/almanac?search_year=2027&bbs_uniq_id=almanac" } },
        { source: { label: "关于官公署公休日的规定（韩文）", url: "https://www.law.go.kr/법령/관공서의공휴일에관한규정" } },
        { h2: "春节和中秋前后要注意什么" },
        {
          p: "这两个农历大节各放三天，很多人会回老家。如果行程与之重叠，请提早安排交通和住宿。法律规定的是政府机关的公休日，民营企业的休息日由劳动法规范，所以某家商店或餐厅是否营业由店家自己决定——出发前请先确认。",
        },
        {
          note: "政府可以经国务会议决定临时增设公休日，有时公布得很晚。如果 2027 年公布了临时公休日，我们会更新本页。",
        },
      ],
      faq: [
        { q: "2027 年韩国中秋是哪几天？", a: "2027 年 9 月 14–16 日（周二至周四），依据官报公布的官方历书。" },
        { q: "2027 年韩国春节（설날）是哪几天？", a: "2027 年 2 月 6–8 日，其中一天是周日，因此 2 月 9 日（周二）补休。" },
      ],
    },
    {
      slug: "driving-in-korea",
      enSlug: "driving-in-korea",
      title: "在韩国开车：需要国际驾照，有效期为入境起一年",
      description: `只有外国驾照不能开车。访客须持国际驾照，自入境起一年有效。中国大陆驾照的情况未见官方说明，请先确认。酒驾标准 ${F.bacLimit}。`,
      checked: CHECKED,
      practical: true,
      related: [HUB, "smoking-vaping-and-alcohol", "emergency-and-safety"],
      blocks: [
        {
          p: "最容易出问题的一条规定：在韩国，仅凭本国驾照不能开车。韩国道路交通公团对此有明确说明。",
        },
        { h2: "需要什么" },
        {
          ul: [
            "依据 1949 年《日内瓦道路交通公约》或 1968 年《维也纳道路交通公约》签发的国际驾驶许可证（IDP），或",
            "依据韩国与签发国之间的双边协定获得承认的国际驾照或驾照",
            "自入境韩国之日起一年内有效，且只限证件上载明的车型",
            "可以用它租车，但不能驾驶出租车、营业性货车等营运车辆",
          ],
        },
        { source: { label: "道路交通法第96条（韩文）", url: "https://www.law.go.kr/법령/도로교통법" } },
        { source: { label: "韩国道路交通公团 — 外国驾照（韩文）", url: "https://www.safedriving.or.kr/diGuide/selectDiGuide05.do" } },
        { h2: "中国大陆驾照" },
        {
          p: "我们没有找到任何韩国或中国官方机构关于中国大陆驾照或中国签发的国际驾照能否在韩国使用的说明，因此本页不作结论。在依赖中国驾照安排自驾之前，请先向韩国道路交通公团或租车公司确认。",
        },
        { h2: "租车" },
        {
          p: "据韩国观光公社介绍，租车公司会要求出示国际驾照、护照和驾驶人本人名下的信用卡，驾驶人须年满 21 岁。有些公司还会要求查看本国驾照，所以请随身携带。这些是公司条件而非法律规定，请向您预订的公司确认。",
        },
        { source: { label: "韩国观光公社 — 在韩国驾车（英文）", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140664" } },
        { h2: "交通规则" },
        {
          ul: [
            "靠右行驶",
            "车内所有座位都必须系安全带；婴幼儿须使用儿童座椅",
            `血液酒精浓度达到 ${F.bacLimit} 即构成酒驾，自行车同样适用。警察要求时必须接受呼气检测`,
            "摩托车驾驶人和乘客必须戴头盔",
            "距离以公里计，速度以公里/小时计",
          ],
        },
      ],
      faq: [
        { q: "可以用本国驾照在韩国开车吗？", a: "不可以。韩国道路交通公团表示，仅凭外国签发的驾照不能开车。访客需要依据日内瓦或维也纳公约签发的国际驾照，或依双边协定获得承认的驾照。" },
        { q: "中国大陆驾照在韩国能用吗？", a: "我们没有找到官方说明，因此无法确定。出发前请向韩国道路交通公团或租车公司确认。" },
        { q: "国际驾照在韩国有效多久？", a: "自入境韩国之日起一年（道路交通法第96条）。" },
      ],
    },
    {
      slug: "healthcare-for-visitors",
      enSlug: "healthcare-for-visitors",
      title: "访客在韩国就医：费用自付，请带好保险",
      description: "游客不在韩国国民健康保险范围内。哪里可以通过翻译就医、该打哪个电话，以及为什么要买保险。",
      checked: CHECKED,
      practical: true,
      related: [HUB, "emergency-and-safety", "bringing-medicines"],
      blocks: [
        { h2: "游客没有公共保障" },
        {
          p: "韩国国民健康保险只在外国人办理外国人登录并在韩国居住满一定期间，或受雇于韩国雇主时才适用。持签证或免签入境的短期访客都不在其中，就医费用需要自己支付。",
        },
        {
          p: "我们没有找到让中国游客在韩国免费或减费就医的协定。2013 年生效的韩中社会保险协定涉及的是派遣或当地受雇劳动者的养老金和就业保险等，不涵盖游客就医。因此建议购买涵盖医疗费用和紧急送返的旅行保险。",
        },
        { source: { label: "国民健康保险法第109条（韩文）", url: "https://www.law.go.kr/법령/국민건강보험법" } },
        { source: { label: "韩国国民年金公团 — 韩中社会保险协定（韩文）", url: "https://www.nps.or.kr/pnsinfo/sclsmise/getOHAF0131M0.do?id=23_01" } },
        { h2: "有翻译服务的医院" },
        {
          p: "韩国许多大型医院设有国际诊疗中心，有会说英语及其他语言的工作人员协助预约和就诊。韩国观光公社列出了这些医院，包括首尔峨山医院、新村世福兰斯医院、三星首尔医院、首尔大学医院和首尔圣母医院。这些中心在工作日办公时间开放——夜间和周末请去急诊室。",
        },
        { source: { label: "韩国观光公社 — 紧急情况与国际诊疗（英文）", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140042" } },
        { h2: "该打哪个电话" },
        {
          ul: [
            "119 — 救护车（及火警）",
            "1339 — 韩国疾病管理厅的 24 小时热线，用于疾病咨询和疑似传染病。它不是叫救护车的号码。外国人通过与 1330 或 1345 的三方通话获得帮助",
            "1330 — 韩国旅游咨询热线，提供翻译和旅游信息，有中文服务（从境外拨打 +82-2-1330）",
          ],
        },
        { source: { label: "韩国疾病管理厅 — 1339 呼叫中心（韩文）", url: "https://kdca.go.kr/kdca/2777/subview.do" } },
        {
          note: "自带药品是另一回事：一些常见的处方药需要在出发前获得批准。请参阅关于携带药品的页面。",
        },
      ],
      faq: [
        { q: "游客在韩国看病免费吗？", a: "不免费。短期访客不在韩国国民健康保险范围内，需自付医疗费用，强烈建议购买旅行医疗保险。韩中社会保险协定针对劳动者的养老金和就业保险，不涵盖游客。" },
        { q: "1339 是急救电话吗？", a: "不是叫救护车的号码。1339 是疾病管理厅用于疾病咨询和疑似传染病的热线。叫救护车请拨 119。" },
      ],
    },
    {
      slug: "emergency-and-safety",
      enSlug: "emergency-and-safety",
      title: "韩国紧急电话：112、119，以及中文求助渠道",
      description: "报警 112，火警和救护车 119。112 有 24 小时中文翻译，1330、1345 也有中文；另有应急 App 和手机灾害短信。",
      checked: CHECKED,
      practical: true,
      related: [HUB, "healthcare-for-visitors", "phones-and-sim-cards"],
      blocks: [
        { h2: "号码" },
        {
          ul: [
            "112 — 警察",
            "119 — 火警与救护车",
            "1339 — 传染病咨询（韩国疾病管理厅）",
            "1330 — 韩国旅游咨询热线：旅游信息、翻译和投诉，可电话或在线聊天（从境外拨打 +82-2-1330）",
            "1345 — 法务部外国人综合咨询中心（从境外拨打 +82-2-1345）",
          ],
        },
        { source: { label: "韩国观光公社 — 紧急情况（英文）", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140042" } },
        { h2: "用中文求助" },
        {
          ul: [
            "112：自 2024 年 3 月起，警察热线通过三方通话提供 24 小时英语和中文翻译",
            "1330：韩国观光公社列出的语言有英语、日语、中文、俄语、越南语、泰语、马来语和印尼语",
            "1345：20 种语言，含中文，工作日 09:00–22:00（18:00 以后只有韩语、英语和中文）。通话收费",
            "119 也接受短信报警，可附照片或视频，不方便说话时很有用",
          ],
        },
        { source: { label: "韩国文化宣传院 — 112 的 24 小时翻译服务（2024，英文）", url: "https://www.korean-culture.org/eng/webzine/202405/sub10.html" } },
        { source: { label: "韩国出入境外国人政策本部 — 1345 外国人综合咨询中心（韩文）", url: "https://www.immigration.go.kr/immigration/1530/subview.do" } },
        { h2: "应急 App 与手机警报" },
        {
          p: "韩国政府的 Emergency Ready App（应急准备 App）提供灾害警报、最近的避难所、急诊室和警察局位置以及急救指南。韩国观光公社列出它支持 22 种语言，包括中文和英语。另外，自 2024 年 2 月起，向某一地区所有手机发送的最高级别紧急灾害短信，会在韩语之外以英语标示灾害类型和地震规模。",
        },
        { source: { label: "韩国观光公社 — 实用 App 与资源（英文）", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=198570" } },
        { source: { label: "韩国行政安全部 — 紧急灾害短信加注英语（2024年2月28日，韩文）", url: "https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=107429" } },
        { h2: "民防演习" },
        {
          p: "韩国不定期举行民防演习：警报响起，交通暂停，人们被引导到避难所，通常是地铁站或地下停车场。德国外交部表示，外国人没有参加的义务，但建议参加。",
        },
        {
          note: "丢了东西？警方在 lost112.go.kr 提供失物招领服务，有韩语、英语、日语和中文版本。",
        },
      ],
      faq: [
        { q: "韩国的紧急电话是多少？", a: "报警 112，火警和救护车 119。" },
        { q: "112 可以说中文吗？", a: "可以。自 2024 年 3 月起，警察热线通过三方通话提供 24 小时英语和中文翻译。" },
      ],
    },
  ],
};

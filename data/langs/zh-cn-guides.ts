import { FACTS as F } from "./_schema";
import type { Article } from "./_schema";

/**
 * 英語ページの横展開（2026-11-15）。英語の data/pages.ts にあって zh-cn 版に無かった話題。
 * ⚠️ 数値は F（data/facts.ts）から入れる。本文に直接書かない。
 *
 * 🚨 読者＝中国本土旅券＝韓国のビザ免除対象外＝K-ETA適用外（zh-cn.ts 冒頭参照）。
 *    K-ETA申請手続きのページ（how-to-apply / keta-app / status-check / if-your-keta-is-denied /
 *    common-mistakes / when-the-exemption-ends / news など）は訳さない。申請を勧めることになるため。
 *    official-site と short-term-visit-visa は「あなたには当てはまらない／代わりに要るもの」に書き換えた。
 * ⚠️ 香港・マカオ特区旅券＝ビザ免除＋K-ETA一時免除（2026-12-31まで）。触れる場合は行を分ける。
 * ⚠️ 団体旅行の2措置（団体観光客のビザ免除／団体ビザ手数料免除）は混同しない・日付を書かない。
 */

const EXEMPT_UNTIL = "2026年12月31日"; // = F.exemptionUntil
const NEW_CHECKED = "2026年11月15日"; // 英語版 NEW_CHECKED = "15 November 2026"
const QUARANTINE_FINE = "500 万韩元"; // = F.quarantineMaxFine
const QUARANTINE_LAW = "《家畜传染病预防法》"; // = F.quarantineLaw
const DECISION = "72 小时"; // = F.decisionTypical
const USD_APPROX = "约 7～8 美元"; // = F.feeUsdApprox

const HUB = "arriving-in-korea";

export const zhCnGuides: Article[] = [
  {
    slug: "border-questions",
    enSlug: "border-questions",
    added: "2026-11-15",
    title: "抵达韩国时会经历什么：入境审查、检疫与海关",
    description: "入境审查、检疫和海关是三道不同的关口，各问各的事。事先知道哪一关问什么，过关会顺利得多。",
    related: [HUB, "arrival-card-and-e-gates", "bringing-medicines"],
    blocks: [
      {
        p: "抵达韩国的旅客要依次通过三道关口，分别由三个不同的机关负责。它们关心的事情不同，需要的申报也各自分开。",
      },
      { h2: "1. 入境审查" },
      {
        ul: [
          "停留多久、住在哪里",
          "是否持有续程或回程机票",
          "访问目的",
          "大多数入境旅客需要按指纹并拍摄面部照片",
        ],
      },
      {
        p: "停留期限在这一关确定。对中国大陆护照持有人来说，让您站到这个柜台前的是签证（港澳特区护照则是免签安排）；但签证本身并不决定审查结果，是否准予入境由入境审查官判断。",
      },
      { h2: "2. 检疫" },
      {
        p: `韩国会检查入境旅客携带的动物和植物产品。这不是走过场：依据${QUARANTINE_LAW}，未申报最高可处 ${QUARANTINE_FINE}罚款。`,
      },
      { h2: "3. 海关" },
      {
        p: `所有人都要提交旅客携带物品申报。超过 ${F.customsGoodsAllowance} 免税额度的物品必须申报。`,
      },
      { h2: "落地前准备好这些" },
      {
        ul: [
          "写好在韩国的住宿地址",
          "续程或回程航班信息",
          "对行李中的食品和植物类物品如实回答",
        ],
      },
      { source: { label: "Animal and Plant Quarantine Agency — Rules for overseas travellers", url: "https://www.qia.go.kr/english/html/Animal_livestock/02AnimalLivestock_003-5.jsp" } },
      {
        note: "不确定某样东西是否需要申报时，就申报。申报了结果是允许携带的物品，不会受到任何处罚。",
      },
    ],
  },
  {
    slug: "quarantine",
    enSlug: "quarantine",
    added: "2026-11-15",
    title: "韩国入境检疫：肉类与植物产品，以及未申报的罚款",
    description: `入境韩国时未申报动物或植物产品，依据${QUARANTINE_LAW}最高可处 ${QUARANTINE_FINE}罚款。哪些东西要申报，哪些容易被忽略。`,
    related: [HUB, "bringing-medicines", "customs-allowances"],
    blocks: [
      {
        p: "为应对非洲猪瘟等动物疫病，韩国已大幅加强边境检疫。旅客携带的肉制品正是这些疫病传播的途径之一，相关规定在入境时严格执行。",
      },
      { h2: "罚则" },
      {
        p: `未进行检疫申报的旅客，依据${QUARANTINE_LAW}最高可处 ${QUARANTINE_FINE}罚款。罚款针对的是「未申报」这一行为，而不只是针对最终被认定为禁止携带的物品。`,
      },
      { h2: "必须申报的物品" },
      {
        ul: [
          "各种肉类及肉制品——包括腌制、风干和罐装的",
          "乳制品和蛋类",
          "新鲜水果、蔬菜、种子和坚果",
          "植物、泥土，以及沾有泥土的物品",
          "活体动物，以及在动物周边使用过的物品",
        ],
      },
      { h2: "旅客以为没问题、其实有问题的东西" },
      {
        ul: [
          "在出发地机场买的香肠或肉干",
          "家人做好让您带上的自制食品",
          "方便面调料包里的肉干",
          "从飞机上带下来的水果",
        ],
      },
      { h2: "让您不出问题的原则" },
      {
        p: "申报不花钱。物品允许携带就还给您；不允许就当场处理，事情到此为止。罚款针对的是不申报，所以不存在「不说反而更好」的情况。",
      },
      { source: { label: "Animal and Plant Quarantine Agency — Rules for overseas travellers", url: "https://www.qia.go.kr/english/html/Animal_livestock/02AnimalLivestock_003-5.jsp" } },
    ],
  },
  {
    slug: "customs-allowances",
    enSlug: "customs-allowances",
    added: "2026-11-15",
    title: "入境韩国的免税额度",
    description: `一般物品免税额度为 ${F.customsGoodsAllowance}，酒类、烟草和香水另有限额。未满 ${F.customsAgeMin} 岁的旅客不享有烟酒的免税额度。`,
    related: [HUB, "money-and-tipping", "tax-refund-for-tourists", "smoking-vaping-and-alcohol"],
    blocks: [
      {
        p: "海关和检疫是两回事。检疫看的是物品会不会带来疫病风险，海关看的是要不要缴税。两者都在入境时申报，过了其中一关不等于过了另一关。",
      },
      { h2: "免税额度" },
      {
        ul: [
          `一般物品：应税价格合计 ${F.customsGoodsAllowance}`,
          `酒类：合计不超过 ${F.customsAlcoholLitres} 升且不超过 ${F.customsAlcoholValue}，与一般物品额度分开计算`,
          `香烟：${F.customsCigarettes} 支`,
          `香水：${F.customsPerfumeMl} 毫升`,
        ],
      },
      { h2: "年龄限制" },
      {
        p: `未满 ${F.customsAgeMin} 岁的旅客——按出生年份计算，而不是按生日——不享有酒类和烟草的免税额度。以为可以用上青少年那一份额度的家庭，常在这里出问题。`,
      },
      { h2: "超出额度时" },
      {
        p: "请申报。关税和税款按超出的部分计算。超额物品不申报是另一个问题，而且比税款本身代价更高。",
      },
      { source: { label: "Korea Customs Service — Duty-free allowance for travellers", url: "https://www.customs.go.kr/english/cm/cntnts/cntntsView.do?mi=8028&cntntsId=2716" } },
      {
        note: "飞往韩国途中购买的免税品同样计入免税额度。在机场隔离区内购买并不能免除。",
      },
    ],
  },
  {
    slug: "transit-through-korea",
    enSlug: "transit-through-korea",
    added: "2026-11-15",
    title: "在韩国转机：留在机场内与出机场是两回事",
    description: "在韩国转机时需不需要入境许可，取决于是否通过入境审查。留在国际转机区与进入韩国境内，适用的规则不同。",
    related: [HUB, "airport-security-liquids", "korea-visa-basics", "major-airports"],
    blocks: [
      {
        p: "在仁川转机，是很多人查到这类信息的原因之一。答案取决于一个问题：您会不会离开国际转机区？",
      },
      { h2: "留在机场隔离区内" },
      {
        p: "留在国际转机区内、直接搭乘续程航班的旅客，并没有进入韩国。既然没有入境，也就不涉及入境许可。",
      },
      { h2: "离开机场" },
      {
        p: "通过入境审查——无论是为了提取托运行李、在机场外过夜，还是利用转机空档进市区——都算入境。这时就要和一般旅行一样满足入境条件：中国大陆护照持有人需要签证；港澳特区护照属于免签对象，且目前在 K-ETA 一时免除期间（至 " + EXEMPT_UNTIL + "）。",
      },
      { h2: "长时间转机最容易出问题" },
      {
        ul: [
          "行李没有直挂到最终目的地，就必须入境提取",
          "隔夜转机、住在机场外的酒店，就是入境",
          "需要重新经过入境审查才能换航站楼的，也是入境",
        ],
      },
      {
        note: "请在订票前就想清楚，而不是到了转机柜台才考虑。只要有可能离开机场，就请事先办好入境所需的许可——对中国大陆护照来说，那就是出发前办好的签证。",
      },
      { source: { label: "K-ETA official portal", url: F.officialUrl } },
    ],
  },
  {
    slug: "official-site",
    enSlug: "official-site",
    added: "2026-11-15",
    checked: NEW_CHECKED,
    title: "K-ETA 官方网站怎么辨认——以及中国大陆护照为什么用不上",
    description: "K-ETA 只能在 www.k-eta.go.kr 或官方 K-ETA 应用程序申请，韩国未指定任何代办机构。中国大陆护照不适用 K-ETA，要填的是官方电子入境卡。",
    related: ["keta-cost", "arrival-card-and-e-gates", "china-passport-korea-guide", "korea-visa-basics"],
    blocks: [
      {
        p: "K-ETA 的官方渠道只有两个：网站 www.k-eta.go.kr，以及名为 K-ETA 的手机应用程序。官方网站提醒申请人，要小心以代办申请或加急服务为名收取高额费用的类似代办网站和钓鱼网站。",
      },
      {
        note: "中国大陆护照不在 K-ETA 的适用范围内，官方网站和应用程序都不会受理您的申请。对中国大陆读者来说，本页真正有用的是两件事：认清以「代办」「加急」名义收费的网站，以及确认电子入境卡的官方网址——入境卡才是您入境时要提交的。",
      },
      { h2: "韩国没有指定任何代办机构" },
      {
        p: "K-ETA 的一则公告写明，韩国政府没有把 K-ETA 申请业务委托给任何代办机构，并且已发现有非官方网站要求支付更高的申请费。韩国出入境外国人政策本部在 2025 年 8 月再次提醒：没有指定任何代办机构，申请应通过官方网站或 K-ETA 应用程序提交。",
      },
      { h2: "官方网站的收费（供港澳等适用者参考）" },
      {
        ul: [
          `每人 ${F.fee}（${USD_APPROX}）`,
          "可能另收在线支付手续费，一般约为 3%",
          "费用一经支付，无论结果如何均不退还",
          "2023 年 7 月 3 日 09:00（韩国时间）以后提交的申请，收据会自动发送到申请人的电子邮箱",
        ],
      },
      { h2: "审核需要多久" },
      {
        p: `官方网站表示，审核一般在 ${DECISION}内完成，申请量意外增加时可能更久。申请按受理顺序审核，没有加急服务。`,
      },
      { h2: "运营者与联系方式" },
      {
        ul: [
          "网站由大韩民国法务部电子旅行许可（K-ETA）中心运营",
          "K-ETA 中心原则上不提供电话或面对面咨询。咨询请使用网站上的「Ask Us」，可用韩语、英语、泰语或俄语",
          "申请表和主要公告提供 10 种语言，但申请栏只能用英文填写",
        ],
      },
      { h2: "电子入境卡有自己的官方网站" },
      {
        p: "韩国出入境外国人政策本部提醒注意假冒的电子入境卡网站。电子入境卡唯一的官方网站是 www.e-arrivalcard.go.kr，任何要求为此填写付款信息的网站都不是官方服务。中国大陆护照凭签证入境，需要提交入境卡，这一点尤其值得留意。",
      },
      {
        note: `本站是独立信息网站，不是官方网站，不受理申请，也不收取任何费用。K-ETA 只能通过 ${F.officialHost} 或 K-ETA 应用程序申请。`,
      },
      { source: { label: "K-ETA official website — application", url: F.officialUrl } },
      { source: { label: "K-ETA notice — Beware of non-official websites and agencies", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=114771" } },
      { source: { label: "Korea Immigration Service — Beware of unofficial K-ETA websites (18 August 2025)", url: "https://www.immigration.go.kr/bbs/immigration_eng/229/598009/artclView.do" } },
      { source: { label: "K-ETA — Fee information", url: "https://www.k-eta.go.kr/portal/guide/viewetafeeinformation.do" } },
      { source: { label: "K-ETA notice — How to get a payment receipt", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=130892" } },
      { source: { label: "K-ETA — Frequently asked questions", url: "https://www.k-eta.go.kr/portal/board/viewboardlist.do?tmpltNm=faq2" } },
      { source: { label: "Korea Immigration Service — Beware of fake e-Arrival card websites (9 March 2026)", url: "https://www.immigration.go.kr/bbs/immigration_eng/229/604164/artclView.do" } },
    ],
    faq: [
      { q: "有经过授权的 K-ETA 代办机构吗？", a: "没有。韩国政府表示，没有为 K-ETA 申请指定任何代办机构。" },
      { q: "可以打电话给 K-ETA 中心吗？", a: "K-ETA 中心原则上不提供电话或面对面咨询，请使用官方网站上的「Ask Us」。" },
      { q: "中国大陆护照可以在官方网站申请 K-ETA 吗？", a: "不可以。K-ETA 只面向可以免签入境韩国的国家和地区，中国大陆护照需要办理签证。" },
    ],
  },
  {
    slug: "short-term-visit-visa",
    enSlug: "short-term-visit-visa",
    added: "2026-11-15",
    checked: NEW_CHECKED,
    title: "韩国短期访问签证（C-3）：中国大陆护照赴韩该办的签证",
    description: "中国大陆护照不属于韩国免签对象，不适用 K-ETA，短期访韩要办签证。C-3 短期访问签证的类别、适用情形与申请途径。",
    related: ["korea-visa-basics", "keta-eligibility-china", "korea-entry-stay"],
    blocks: [
      {
        p: "K-ETA 只面向可以免签入境韩国的旅客。中国大陆护照不属于韩国的免签对象，因此不适用 K-ETA，需要通过韩国驻华使领馆申请签证。官方 K-ETA 页面在其他几种情况下，也会引导旅客改办签证。",
      },
      { h2: "什么情况下需要签证而不是 K-ETA" },
      {
        ul: [
          "护照国籍不属于免签对象——K-ETA 的适用与否取决于护照资料页上的国籍。中国大陆护照属于这种情况",
          "K-ETA 被拒——官方 FAQ 指示到最近的韩国使领馆申请签证",
          "处于重复申请限制期内（6 个月内申请 3 次或以上），又需要在此期间出行",
          "计划在韩国就业、留学或从事其他营利活动",
        ],
      },
      { h2: "已经持有签证的话" },
      {
        p: "持有有效韩国签证的人不需要 K-ETA。官方指南写明，持有有效签证者，其滞留资格和停留期限按该签证给予，与是否同时持有 K-ETA 无关。",
      },
      { h2: "C-3 短期访问签证的类别" },
      {
        p: "在韩国签证门户网站（Korea Visa Portal）上，「短期访问」列为停留 90 天以内的签证，分为以下类别：",
      },
      {
        ul: [
          "短期一般（C-3-1）",
          "团体观光（C-3-2）",
          "短期商务（一般）（C-3-4）",
          "短期商务（协定）（C-3-5）",
          "短期商务（邀请）（C-3-6）",
          "海外同胞短期访问（C-3-8）",
          "一般观光（C-3-9）",
          "直接过境（机场隔离区内）（C-3-10）",
        ],
      },
      {
        p: "签证导航（Visa Navigator）对短期一般（C-3-1）的说明是：用于探亲访友、友谊比赛、参加或观摩活动与会议、文化艺术、一般研修、听课、宗教仪式、收集学术资料等目的。不允许从事营利活动或就业。",
      },
      {
        p: "持有 APEC 商务旅行卡的人，入境时获得短期商务（C-3-4）资格，最多可停留 90 天。",
      },
      {
        note: "「团体观光（C-3-2）」是签证类别。针对团体游客另外出现过两项不同的措施——团体游客的免签入境安排，以及团体签证手续费的减免——两者的条件和期限各不相同，请以韩国驻华使领馆的现行公告为准。",
      },
      { h2: "申请途径" },
      {
        p: "签证导航列出了三种途径：通过韩国驻外使领馆申请、申请电子签证，以及申请签证发放确认书。哪种途径对您开放，以及所需材料、费用和办理时间，取决于您的国籍和受理您申请的使领馆。申请前请向该使领馆确认，或使用签证导航查询。",
      },
      {
        note: "出入境外国人综合咨询中心电话：+82-1345。",
      },
      { source: { label: "Korea Visa Portal — Visa by categories", url: "https://www.visa.go.kr/openPage.do?MENU_ID=10102&LANG_TYPE=EN" } },
      { source: { label: "Korea Visa Portal — Visa Navigator", url: "https://www.visa.go.kr/openPage.do?MENU_ID=10101&LANG_TYPE=EN" } },
      { source: { label: "K-ETA — Frequently asked questions", url: "https://www.k-eta.go.kr/portal/board/viewboardlist.do?tmpltNm=faq2" } },
      { source: { label: "K-ETA — Application guide", url: "https://www.k-eta.go.kr/portal/guide/viewetaapplication.do" } },
      { source: { label: "K-ETA notice — Restriction on the number of applications", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=38748" } },
    ],
    faq: [
      { q: "持有韩国签证还需要 K-ETA 吗？", a: "不需要。官方 FAQ 写明，持有有效韩国签证的人不需要 K-ETA。" },
      { q: "C-3 签证需要哪些材料？", a: "取决于您的国籍和受理申请的韩国使领馆。请向该使领馆确认，或查询韩国签证门户网站。" },
    ],
  },
];

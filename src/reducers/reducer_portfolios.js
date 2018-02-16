export default function() {
  return  {
      "technology": [
        {
        name: "Boon Investments",
        image: "boon-investments.png",
        skills: ["UI/UX", "Swift", "Python"],
        href: "boon-investments-t",
        nref: "ria-portal",
        pref: "autoPOOL",
        },
        {
          name: "RIA Portal",
          image: "auto-oms.png",
          skills: ["UI/UX", "Angular", "AWS"],
          href: "ria-portal",
          nref: "autoPOOL",
          pref: "boon-investments-t",

        },
        {
        name: "AutoPOOL",
        image: "autopool.png",
        skills: ["UI/UX", "Swift", "App Engine" ],
        href: "autoPOOL",
        nref: "boon-investments-t",
        pref: "ria-portal",
      },
      {
      name: "Bank of America",
      image: "bank-of-america.png",
      skills: ["Modeling", "Forecasting"],
      href: "bank-of-america",
      nref: "sunrun",
      pref: "boon-investments-f",
      },
      {
        name: "SunRun",
        image: "sunrun.png",
        skills: ["FP&A", "IPO"],
        href: "sunrun",
        nref: "boon-investments-f",
        pref: "bank-of-america",
      }
      ],
      "finance": [
        {
        name: "Bank of America",
        image: "bank-of-america.png",
        skills: ["Modeling", "Forecasting"],
        href: "bank-of-america",
        nref: "sunrun",
        pref: "boon-investments-f",
        },
        {
          name: "SunRun",
          image: "sunrun.png",
          skills: ["FP&A", "IPO"],
          href: "sunrun",
          nref: "boon-investments-f",
          pref: "bank-of-america",
        },
        {
        name: "Boon Investments",
        image: "boon-investments.png",
        skills: ["Investments", "B2B Sales"],
        href: "boon-investments-f",
        nref: "bank-of-america",
        pref: "sunrun",
        }
      ]
    }
}

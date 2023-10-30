import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./assets/logo.png";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <div className="logo">
      <svg width="130" height="" viewBox="0 0 2638 799" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M165.422 508.992H233.163C233.163 560.995 259.849 581.523 293.377 581.523C329.642 581.523 354.275 554.153 354.275 515.835V160.024H424.069V516.519C424.069 593.155 365.908 647.895 293.377 647.895C221.531 647.895 165.422 599.313 165.422 508.992ZM803.165 639L762.794 537.731H586.258L545.887 639H471.988L674.526 151.129L877.064 639H803.165ZM674.526 313.981L610.891 475.464H737.477L674.526 313.981ZM1004.38 151.129L1164.5 495.992L1324.61 151.129L1414.93 639H1342.4L1295.19 367.352L1164.5 647.895L1033.81 367.352L986.593 639H914.062L1004.38 151.129ZM1499.99 639V160.024H1765.48V226.397H1569.79V357.089H1759.33V421.408H1569.79V570.575H1769.59V639H1499.99ZM1853.48 639V160.024H2118.97V226.397H1923.27V357.089H2112.81V421.408H1923.27V570.575H2123.07V639H1853.48ZM2206.96 639V160.024H2276.76V570.575H2472.45V639H2206.96Z" fill="currentColor"/>
</svg>

    </div>
  ),
  project: {
    // link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://twitter.com/alienzhouse",
    icon: (
      <svg width="24" height="24" viewBox="0 0 248 204">
        <path
          fill="currentColor"
          d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
        />
      </svg>
    ),
  },

  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://s.salla.sa/marketplace/themes/1369573297" target="_blank">
          Jameel Theme
        </a>
        .
      </span>
    )
  },

  sidebar: {
    toggleButton: true,
  },

  i18n: [{ locale: "ar-SD", text: "العربية", direction: "rtl" }],

  banner: {
    key: "2.0-release",
    text: (
      <a href="https://nextra.site" target="_blank">
        {/* 🎉 Nextra 2.0 is released. Read more → */}
        🎉 الاصدار الجديد من ثيم جميل 2.0 صدر. اقرأ المزيد →
      </a>
    ),
  },
  search: {
    placeholder: "بحث",
  },

  toc: {
    title:"قائمة المحتويات"
  },
  feedback: {
    content: "سؤال؟ قدم لنا ملاحظاتك →",
  },

  editLink: {
    text: "تعديل هذه الصفحة  ",
  },
  
};

export default config;

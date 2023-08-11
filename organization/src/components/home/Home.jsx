import React from "react";

import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { ShowCase } from "../showcase/ShowCase";
import { Statistics } from "../rectangles_bg/RectanglesBg";
import { TrustedOrganization } from "../trusted_organizations/TrustedOrganization";
import {
  DotsSvg,
  Email,
  FacebookSvg,
  InstagramSvg,
  LinkedInSvg,
  MessageSvg,
  Office,
  Phone,
  RemoteWorkingSvg,
  ShowCaseSvg_1,
  SocialMedias,
  StatisticsSvg,
  TwitterSvg,
} from "../../assets/icons";
import video from "../../assets/images/triumf.mp4";
import img3 from "../../assets/images/ok.avif";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const {t} = useTranslation();

  const numbers = [
    {
      number: "235.000",
      title: t("Section1_title1"),
      desc: t("Section2_text1"),
    },
    {
      number: "200",
      title: t("Section1_title2"),
      desc: t("Section2_text2"),
    },
    {
      number: "+100",
      title: t("Section1_title3"),
      desc: t("Section2_text3"),
    },
  ];
  const comforts = [
    {
      icon: <MessageSvg />,
      title: t("Real_time"),
      desc: t("Real_time_text"),
    },
    {
      icon: <StatisticsSvg />,
      title: t("Diagram"),
      desc: t("Diagram_text"),
    },
    {
      icon: <RemoteWorkingSvg />,
      title: t("Remote"),
      desc: t("Remote_text"),
    },
  ];
  const contacts = [
    {
      icon: <Email />,
      title: "Эмаил ",
      info: "triumf.express@gmail.com",
    },
    {
      icon: <Phone />,
      title: "Телефон",
      info: "+998 (99) 393-44-66, (99) 363-44-66",
    },
    {
      icon: <Office />,
      title: "Оффиcе",
      info: "Тошкент ш. Юнусобод т. Шахристон 2",
    },
    {
      icon: <SocialMedias />,
      title: t("Social_networking"),
      info: [
        <FacebookSvg />,
        <a href="https://twitter.com/triumf_express/" target="_blank">
          <TwitterSvg />
        </a>,
        <InstagramSvg />,
        <LinkedInSvg />,
      ],
    },
  ];
  return (
    <>
      <Header />
      <ShowCase />
      <TrustedOrganization />
      <Statistics badge={t("Number")}>
        <div className="mt-8">
          <h1 className="text-5xl font-extrabold">
            {t("Section_title1")}
          </h1>
          <p className="text-ligth_text mt-4 text-xl">
            {t("Section_title2")}
          </p>

          <div className="flex justify-between mt-20">
            <div className="flex flex-wrap gap-20 w-1/2 text-center">
              {numbers.map((item, i) => (
                <div key={i} className="w-[262px] flex flex-col gap-4">
                  <p className="text-4xl font-extrabold text-bold_text">
                    {item.number}
                  </p>
                  <p className="text-xl font-extrabold text-bold_text">
                    {item.title}
                  </p>
                  <p className="text-ligth_text text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="w-1/2">
              <video className="rounded-md" loop autoPlay src={video} />
            </div>
          </div>
        </div>
      </Statistics>
      <Statistics>
        <div className="mt-8">
          <div className="flex items-start flex-row-reverse justify-between mt-20 gap-44 ">
            <div className="flex flex-col gap-20 w-1/2">
              {comforts.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="gradient rounded-md p-4">{item.icon}</span>
                  <div className="w-[400px]">
                    <p className="text-xl font-extrabold text-bold_text">
                      {item.title}
                    </p>
                    <p className="text-ligth_text text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-1/2 relative">
              <span className="absolute -left-10 -top-10">
                <ShowCaseSvg_1 />
              </span>
              <img
                src={img3}
                alt="Numbers of activity"
                className="w-full"
              />
              <span className="absolute -right-10 -bottom-10">
                <DotsSvg />
              </span>
            </div>
          </div>
        </div>
      </Statistics>
      <Statistics badge={t("Contact_title")}>
        <div className="mt-8">
          <h1 className="text-5xl font-extrabold">
            {t("Contact_main_title")}
          </h1>
          <p className="text-ligth_text mt-4 text-xl">
          {t("Contact_main_text")}
          </p>

          <div className="flex items-center justify-between mt-20">
            <div className="grid grid-cols-2 gap-10 w-1/2 text-center">
              {contacts.map((item) => (
                <div className="w-[262px] flex flex-col items-start gap-4">
                  <span className="gradient rounded-full p-4 w-fit">
                    {item.icon}
                  </span>
                  <p className="text-xl font-extrabold text-bold_text">
                    {item.title}
                  </p>
                  {Array.isArray(item.info) ? (
                    <div className="flex gap-4">
                      {item.info.map((item) => (
                        <span>{item}</span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-ligth_text text-lg text-left">
                      {item.info}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <form className="w-1/2 p-10 bg-graycolor1 flex flex-col gap-10 drop-shadow-md rounded-md">
              <div className="flex flex-col">
                <label htmlFor="email">Эмаил</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="triumf.express@gmail.com"
                  className="outline-slate-300 py-3 px-4 rounded-md border border-slate-300"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="note">Хабар</label>
                <textarea
                  type="note"
                  name="note"
                  id="note"
                  placeholder="Матн киритинг"
                  className="outline-slate-300 py-3 px-4 rounded-md border border-slate-300"
                />
              </div>
              <button className="text-white bg-secondary p-4 rounded-md">
                Жўнатиш
              </button>
            </form>
          </div>
        </div>
      </Statistics>
      <Footer />
    </>
  );
};

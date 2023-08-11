import React from "react";

import { Header } from "../header/Header";
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
import { Footer } from "../footer/Footer";

export const Home = () => {
  const numbers = [
    {
      number: "235.000",
      title: "Йетказиб берилган хатлар",
      desc: "Ҳамкорларимиз бизга ишониб топширган хатларини ўз вақтида манзилларига йетказганмиз",
    },
    {
      number: "200",
      title: "Ҳудуд бўйлаб",
      desc: "Биз Тошкент шахри ва Тошкент вилоятининг ҳар бир маҳалласига кириб борамиз",
    },
    {
      number: "+100",
      title: "Куриерлар",
      desc: "Бизнинг куриерларимиз тез ва ишончли фаолият олиб боришади",
    },
  ];
  const comforts = [
    {
      icon: <MessageSvg />,
      title: "Реал вақтда кузатиш",
      desc: "Ҳар бир хатингиз холатини реал вақтда кузатиб туриш имконияти мавжуд.",
    },
    {
      icon: <StatisticsSvg />,
      title: "Ойлик, йиллик статистикалар",
      desc: "Биз билан амалга ошираётган хамкорлигингизнинг потенсиалини шаффоф холатда кузатиб туришингиз учун статистика ва хисоботларни кўриб туриш имконияти",
    },
    {
      icon: <RemoteWorkingSvg />,
      title: "Масофавий ишлаш",
      desc: "Йетказмаларингизни бизга тақдим қилиш учун офисингизда чиқишингиз шарт емас. Шунчаки ҳаммасини wеб иловамиз орқали бизга узатинг!",
    },
  ];
  const contacts = [
    {
      icon: <Email />,
      title: "Эмаил",
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
      info: "Тошкент ш. Юнусобод т. 20-квартал, 707-уй",
    },
    {
      icon: <SocialMedias />,
      title: t("Social_networking"),
      info: [
        <FacebookSvg />,
        <TwitterSvg />,
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
      <Statistics badge={"Рақамлар"}>
        <div className="mt-8">
          <h1 className="text-5xl font-extrabold">
            Фаолиятимиз хақида рақамлар гапирганда
          </h1>
          <p className="text-ligth_text mt-4 text-xl">
            2 йиллик фаолият ва ушбу натижалар. Aдолатли баҳолаш сиздан!
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
              <img
                src="https://plus.unsplash.com/premium_photo-1670002382357-437bd0d42dec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Numbers of activity"
                className="w-full"
              />
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
                src="https://images.unsplash.com/photo-1681138234408-8043904669a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
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
                    <p className="text-ligth_text text-lg">{item.info}</p>
                  )}
                </div>
              ))}
            </div>
            <form className="w-1/2 p-10 bg-graycolor1 flex flex-col gap-10 drop-shadow-md rounded-md">
              <div className="flex flex-col">
                <label htmlFor="email">Эмаил</label>
                <input type="email" name="email" id="email" placeholder="triumf.express.@gmail.com" className="outline-slate-300 py-3 px-4 rounded-md border border-slate-300"/>
              </div>
              <div className="flex flex-col">
                <label htmlFor="note">Хабар</label>
                <textarea type="note" name="note" id="note" placeholder="Матн киритинг" className="outline-slate-300 py-3 px-4 rounded-md border border-slate-300"/>
              </div>
              <button className="text-white bg-secondary p-4 rounded-md">Жўнатиш</button>
            </form>
          </div>
        </div>
      </Statistics>
      <Footer />
    </>
  );
};

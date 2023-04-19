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
      title: "Yetkazib berilgan xatlar",
      desc: "Hamkorlarimiz bizga ishonib topshirgan xatlarini o’z vaqtida manzillariga yetkazganmiz",
    },
    {
      number: "200",
      title: "Hudud bo’ylab",
      desc: "Biz Toshkent shaxri va Toshkent viloyatining har bir mahallasiga kirib boramiz",
    },
    {
      number: "+100",
      title: "Kurierlar",
      desc: "Bizning kurierlarimiz tez va ishonchli faoliyat olib borishadi ",
    },
  ];
  const comforts = [
    {
      icon: <MessageSvg />,
      title: "Real vaqtda kuzatish",
      desc: "Har bir xatingiz xolatini real vaqtda kuzatib turish imkoniyati mavjud.",
    },
    {
      icon: <StatisticsSvg />,
      title: "Oylik, yillik statistikalar",
      desc: "Biz bilan amalga oshirayotgan xamkorligingizning potensialini shaffof xolatda kuzatib turishingiz uchun statistika va xisobotlarni ko’rib turish imkoniyati",
    },
    {
      icon: <RemoteWorkingSvg />,
      title: "Masofaviy ishlash",
      desc: "Yetkazmalaringizni bizga taqdim qilish uchun ofisingizda chiqishingiz shart emas. Shunchaki hammasini web ilovamiz orqali bizga uzating!",
    },
  ];
  const contacts = [
    {
      icon: <Email />,
      title: "Email",
      info: "contact@flex.co",
    },
    {
      icon: <Phone />,
      title: "Telefon",
      info: "+7-843-672-431",
    },
    {
      icon: <Office />,
      title: "Office",
      info: "Toshkent sh. Yunusobod t. 20-kvartal, 707-uy",
    },
    {
      icon: <SocialMedias />,
      title: "Ijtimoiy tarmoqlarda",
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
      <Statistics badge={"Raqamlar"}>
        <div className="mt-8">
          <h1 className="text-5xl font-extrabold">
            Faoliyatimiz xaqida raqamlar gapirganda
          </h1>
          <p className="text-ligth_text mt-4 text-xl">
            2 yillik faoliyat va ushbu natijalar. Adolatli baholash sizdan!
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
      <Statistics badge={"Biz bilan aloqa"}>
        <div className="mt-8">
          <h1 className="text-5xl font-extrabold">
            Biz bilan aloqaga chiqing!
          </h1>
          <p className="text-ligth_text mt-4 text-xl">
            Biz sizni qiziqtirgan har qanday savollarga javob beramiz yoki{" "}
            <br /> takliflaringizni qabul qilamiz.
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
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="pat@shuffle.dev" className="outline-slate-300 py-3 px-4 rounded-md border border-slate-300"/>
              </div>
              <div className="flex flex-col">
                <label htmlFor="note">Xabar</label>
                <textarea type="note" name="note" id="note" placeholder="Matn kiriting" className="outline-slate-300 py-3 px-4 rounded-md border border-slate-300"/>
              </div>
              <button className="text-white bg-secondary p-4 rounded-md">Jo'natish</button>
            </form>
          </div>
        </div>
      </Statistics>
      <Footer />
    </>
  );
};

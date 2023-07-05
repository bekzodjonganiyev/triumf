import logo from "../../assets/images/triumf.png"

export const Footer = () => {
  return (
    <div className="bg-[#2A3342]">
      <div className="gradient1 py-10">
        <div className="container px-8 mx-auto text-center flex flex-col gap-10">
            <div className="mx-auto">
                <img src={logo} alt="Triumf logo" />
            </div>
            <ul className="flex gap-20 text-white mx-auto">
                <li><a href="#bizhaqimizda" className="">Biz xaqimizda</a></li>
                <li><a href="#imkoniyatlar" className="">Imkoniyatlar</a></li>
                <li><a href="#bizbilanaloqa" className="">Biz bilan aloqa</a></li>
            </ul>
            <div className="text-[#8896AB]">
                © 2021 TRIUMF. All rights reserved.
            </div>
        </div>
      </div>
    </div>
  );
};

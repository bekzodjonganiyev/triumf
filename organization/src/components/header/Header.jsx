import {Link} from "react-router-dom"

import logo from "../../assets/images/triumf-logo.png"
import { useTranslation } from "react-i18next";

export const Header = () => {
    const {t, i18n} = useTranslation();
    const ChangeLang = (langs) => {
        i18n.changeLanguage(langs)  
    }
  return (
    <header className="w-full bg-hero py-2 transition-all">
        <div className="container px-8 mx-auto flex items-center justify-between">
            <div>
                <a href="/"><img src={logo} alt="Triumf logo" className="w-16 h-auto"/></a>
            </div>
            <ul className="flex min-[1280px]:w-1/3 justify-between max-[1280px]:gap-10 max-md:flex-col">
                <li><a href="#bizhaqimizda" className="">{t("N_text1")}</a></li>
                <li><a href="#imkoniyatlar" className="">{t("N_text2")}</a></li>
                <li><a href="#bizbilanaloqa" className="">{t("N_text3")}</a></li>
                <li>
                    <select onChange={(e) => ChangeLang(e.target.value)}>
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                    </select>
                </li>
            </ul>
            <div>
                <Link to="/userLogin" className="bg-primary text-white py-3 px-10 rounded-[24px]">Login</Link>
            </div>
        </div>
    </header>
  )
}

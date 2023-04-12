import { Link } from "react-router-dom"

import logo from "../../assets/images/triumf-logo.png"

export const Header = () => {
  return (
    <header className="w-full bg-hero py-2">
        <div className="container px-8 mx-auto flex items-center justify-between">
            <div>
                <Link to="/"><img src={logo} alt="Triumf logo" className="w-16 h-auto"/></Link>
            </div>
            <ul className="flex w-1/3 justify-between">
                <li><a href="#bizhaqimizda" className="">Biz xaqimizda</a></li>
                <li><a href="#imkoniyatlar" className="">Imkoniyatlar</a></li>
                <li><a href="#bizbilanaloqa" className="">Biz bilan aloqa</a></li>
            </ul>
            <div>
                <Link to="/login" className="bg-primary text-white py-3 px-10 rounded-[24px]">Login</Link>
            </div>
        </div>
    </header>
  )
}

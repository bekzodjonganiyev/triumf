import { Link } from "react-router-dom"

import logo from "../../assets/images/triumf-logo.png"

export const Header = () => {
  return (
    <header className="w-full bg-hero">
        <div className="container mx-auto flex items-center justify-between">
            <div>
                <Link to="/"><img src={logo} alt="Triumf logo" className="w-16 h-auto"/></Link>
            </div>
            <div className="flex w-1/3 justify-between">
                <a href="#bizhaqimizda" className="">Biz xaqimizda</a>
                <a href="#imkoniyatlar" className="">Imkoniyatlar</a>
                <a href="#bizbilanaloqa" className="">Biz bilan aloqa</a>
            </div>
            <div>
                <Link to="/login" className="bg-primary text-white py-3 px-10 rounded-[24px]">Login</Link>
            </div>
        </div>
    </header>
  )
}

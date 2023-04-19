import logo from "../../assets/images/triumf-logo.png"

export const Header = () => {
  return (
    <header className="w-full bg-hero py-2 transition-all">
        <div className="container px-8 mx-auto flex items-center justify-between">
            <div>
                <a href="/"><img src={logo} alt="Triumf logo" className="w-16 h-auto"/></a>
            </div>
            <ul className="flex min-[1280px]:w-1/3 justify-between max-[1280px]:gap-10 max-md:flex-col">
                <li><a href="#bizhaqimizda" className="">Biz xaqimizda</a></li>
                <li><a href="#imkoniyatlar" className="">Imkoniyatlar</a></li>
                <li><a href="#bizbilanaloqa" className="">Biz bilan aloqa</a></li>
            </ul>
            <div>
                <a href="https://triumf-admin.netlify.app/" className="bg-primary text-white py-3 px-10 rounded-[24px]">Login</a>
            </div>
        </div>
    </header>
  )
}

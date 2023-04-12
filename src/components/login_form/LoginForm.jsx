import illustration from "../../assets/images/login-illustration.png";
import truimfLogo from "../../assets/images/triumf.png";

export const LoginForm = () => {
  return (
    <div className="w-full bg-hero">
      <div className="container px-8 mx-auto flex items-center gap-20">
        <div>
          <img src={illustration} alt="Login illustration" />
        </div>
        <div className="py-10 px-5 bg-white shadow-2xl rounded-xl">
          <img src={truimfLogo} alt="Truimf logo"  className="mx-auto mb-10" />
          <h1 className="font-bold text-2xl text-center mb-5">Kirish</h1>
          <form className="flex flex-col gap-5 w-96">
            <input
              type="text"
              name="tel"
              id="tel"
              placeholder="Telefon raqam"
              className="outline-slate-300 py-3 px-4 rounded-md border border-slate-300"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Parol"
              className="outline-slate-300 py-3 px-4 rounded-md border border-slate-300"
            />
            <button
              type="submit"
              className="bg-secondary text-white py-3 px-10 rounded-lg w-fit mx-auto"
            >
              Davom etish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

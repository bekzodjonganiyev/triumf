import illustration from "../../assets/images/login-illustration.png";
import truimfLogo from "../../assets/images/triumf.png";

export const LoginForm = () => {
  return (
    <div className="w-full bg-hero">
      <div className="container mx-auto flex justify-between">
        <img src={illustration} alt="Login illustration" />
        <div className="py-6 px-2 bg-white shadow-lg rounded-md">
          <img src={truimfLogo} alt="Truimf logo" />
          <h1 className="font-bold text-2xl">Kirish</h1>
          <form>
            <input
              type="text"
              name="tel"
              id="tel"
              placeholder="Telefon raqam"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Parol"
            />
            <button
              type="submit"
              className="bg-secondary text-white py-3 px-10 rounded-lg"
            >
              Davom etish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

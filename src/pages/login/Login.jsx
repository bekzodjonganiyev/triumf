import { useMutation } from "@tanstack/react-query";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import illustration from "../../assets/images/illustration.png";
import truimfLogo from "../../assets/images/triumf.png";
import apiClient from "../../helper/apiClient";

export const LoginForm = () => {
  const { mutate, isLoading, isError, isSuccess, error } = useMutation({
    mutationFn: (data) => {
      return apiClient.add("login/", data);
    },
    onSuccess: ({ data }) => {
      localStorage.setItem("token", data?.token);
      window.location.href = "/"
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate({
      username: e.target.tel.value,
      password: e.target.password.value,
    });
  };

  return (
    <div className="w-full h-screen bg-sidebar py-10">
      <div className="container px-8 mx-auto flex items-center gap-20">
        <div>
          <img src={illustration} alt="Login illustration" />
        </div>
        <div className="py-10 px-5 bg-white shadow-2xl rounded-xl">
          <img src={truimfLogo} alt="Truimf logo" className="mx-auto mb-10" />
          <h1 className="font-bold text-2xl text-center mb-5">Kirish</h1>
          <form className="flex flex-col gap-5 w-96" onSubmit={handleSubmit}>
            <input
              required
              type="text"
              name="tel"
              id="tel"
              placeholder="Telefon raqam"
              className="outline-slate-300 py-3 px-4 rounded-md border border-slate-300"
            />
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Parol"
              className="outline-slate-300 py-3 px-4 rounded-md border border-slate-300"
            />
            <p
              className={`text-center ${
                isError ? "text-red-600" : "text-green-600"
              } `}
            >
              {isError ? error?.message : isSuccess ? "Muvaffaqiyatli" : ""}
            </p>
            <button
              disabled={isLoading}
              type="submit"
              className="bg-primary text-white py-3 px-10 rounded-lg w-fit mx-auto disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Spin
                  indicator={
                    <LoadingOutlined
                      style={{
                        fontSize: 24,
                        color: "white",
                      }}
                      spin
                    />
                  }
                />
              ) : (
                "Davom etish"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

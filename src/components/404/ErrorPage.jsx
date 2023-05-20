import React from "react";

import "./ErrorPage.css"

export const ErrorPage = () => {
  return (
    <div class="section">
      <h1 class="error">404</h1>
      <div class="page">Ooops!!! Siz qidirgan sahifa topilmadi</div>
      <a class="back-home" href="/app">
        Back to home
      </a>
    </div>
  );
};

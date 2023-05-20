import React from "react";

import "./ErrorPage.css"

export const ErrorPage = () => {
  return (
    <div class="section">
      <h1 class="error">404</h1>
      <div class="page">Ooops!!! The page you are looking for is not found</div>
      <a class="back-home" href="/app">
        Back to home
      </a>
    </div>
  );
};

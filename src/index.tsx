import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import App from "./app";
import { client } from "./api/apollo";
import { onLCP, onCLS, onINP, onFCP, onTTFB } from "web-vitals";
import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL!
    : process.env.REACT_APP_API_DEV_URL!;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

const container = document.getElementById("root");
const root = createRoot(container!);
const router = createHashRouter([{ path: "*", element: <App /> }]);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
);

// 这是PWA自动弹出安装提示的代码，可以拦截并在之后需要的时候再调用event.prompt()弹出安装提示（暂未实现）
window.addEventListener("beforeinstallprompt", (event) => {});

// Measuring performance in our app, pass a function
// Learn more: https://github.com/GoogleChrome/web-vitals, https://bit.ly/CRA-vitals
if (process.env.NODE_ENV === "development") {
  onCLS(console.log); // Cumulative Layout Shift, https://web.dev/cls/
  onLCP(console.log); // Largest Contentful Paint, https://web.dev/lcp/
  onINP(console.log); // Interaction to next Paint, https://web.dev/inp/
  onFCP(console.log); // First Contentful Paint, https://web.dev/fcp/
  onTTFB(console.log); // Time to First Byte, https://web.dev/ttfb/
}

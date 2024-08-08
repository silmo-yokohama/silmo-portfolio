import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

createInertiaApp({
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.jsx`,
      import.meta.glob("./Pages/**/*.jsx"),
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
      <Provider store={store}>
        <App {...props} />
      </Provider>,
    );
  },
  progress: {
    color: "#4B5563",
  },
});

import VirtoShellFramework, { notification, useUser, useLanguages, useDynamicModules } from "@vc-shell/framework";
import { createApp } from "vue";
import { router } from "./router";
import * as locales from "./locales";
import { RouterView } from "vue-router";
import vcmpModules from "@vcmp-vendor-portal/modules";
import ImportModule from "@virtocommerce/import-app";
import { bootstrap } from "./bootstrap";

import ExtensionExample from "./modules/extension-example";
import SampleModule from "./modules/sample";

// Load required CSS
import "./styles/index.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@vc-shell/framework/dist/index.css";
import "@vcmp-vendor-portal/modules/dist/style.css";
import "@virtocommerce/import-app/dist/style.css";

async function startApp() {
  const { loadUser } = useUser();

  const { load: loadSeller, item: sellerDetails } = vcmpModules.SellerDetails.composables.useSellerDetails();

  try {
    await loadUser();
    await loadSeller();
  } catch (e) {
    console.log(e);
  }

  const { currentLocale, setLocale } = useLanguages();
  const app = createApp(RouterView);

  const { load } = useDynamicModules(app, { router, appName: "vendor-portal" });

  app.use(VirtoShellFramework, {
    router,
    platformUrl: import.meta.env.APP_PLATFORM_URL,
    i18n: {
      locale: import.meta.env.APP_I18N_LOCALE,
      fallbackLocale: import.meta.env.APP_I18N_FALLBACK_LOCALE,
    },
    signalR: {
      creator: sellerDetails.value?.id,
    },
  });
  // Import module
  app.use(ImportModule.Import.default, { router });
  // ExtensionExample module initialization
  app.use(ExtensionExample, { router });
  // Sample module initialization
  app.use(SampleModule, { router });

  Object.values(vcmpModules).forEach((module) => {
    app.use(module.default, { router });
  });

  // Load dynamic modules
  await load();

  app.use(router);

  bootstrap(app);

  Object.entries(locales).forEach(([key, message]) => {
    app.config.globalProperties.$mergeLocaleMessage(key, message);
  });

  setLocale(currentLocale.value);

  app.config.errorHandler = (err) => {
    notification.error((err as Error).toString(), {
      timeout: 5000,
    });
  };

  await router.isReady();

  app.mount("#app");
}

startApp();

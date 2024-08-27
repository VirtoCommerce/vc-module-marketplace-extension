import { OverridesSchema } from "@vc-shell/framework";

export const overrides: OverridesSchema = {
  upsert: [
    // Here we clone the 'Offers' module and change its properties for demonstration purposes.
    // In a real-world scenario, you don't need to change id, path properties is you want to extend the module.

    // Changing the value of the 'id' property
    {
      id: "Offers",
      path: "settings.id",
      value: "OffersExtended",
    },
    // Changing the value of the 'path' property
    {
      id: "Offers",
      path: "settings.url",
      value: "/offers-extension-example",
    },
    // Adding a new menu item to the main menu
    {
      id: "Offers",
      path: "settings.menuItem",
      value: {
        title: "Extension Example",
        icon: "fas fa-shapes",
        priority: 1,
      },
    },
    {
      id: "Offers",
      path: "settings.composable",
      value: "useOffers",
    },

    {
      id: "Offer",
      path: "settings.id",
      value: "OfferExtended",
    },
    {
      id: "Offer",
      path: "settings.url",
      value: "/offer-extension-example",
    },
    {
      id: "Offer",
      path: "settings.composable",
      value: "useOfferDetails",
    },
    // Adding a new input control that will display data from 'newField' property
    {
      id: "Offer",
      path: "content.offersForm.children.inventoryCard.fields",
      index: 0,
      value: {
        id: "exampleInput",
        component: "vc-input",
        label: "New Field",
        property: "newField",
      },
    },
    // Adding a new action button to the blade toolbar
    {
      id: "Offer",
      path: "settings.toolbar",
      index: 1,
      value: {
        id: "newToolbarAction",
        title: "Click me!",
        icon: "fas fa-plus",
        method: "showAlert",
      },
    },
  ],
};

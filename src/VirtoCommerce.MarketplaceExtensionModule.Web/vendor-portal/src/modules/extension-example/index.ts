import { createDynamicAppModule } from "@vc-shell/framework";
import modules from "@vcmp-vendor-portal/modules";
import overrides from "./schemaOverride";
import { useOfferDetails, useOffers } from "./composables";

export default createDynamicAppModule({
  schema: modules.Offers.schema,
  composables: {
    useOffers,
    useOfferDetails,
  },
  locales: modules.Offers.locales,
  moduleComponents: modules.Offers.components,
  overrides, // <- imported 'overrides'
});

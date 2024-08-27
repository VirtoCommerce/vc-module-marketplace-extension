import { IBladeToolbar, DetailsComposableArgs, UseDetails } from "@vc-shell/framework";
import modules, {type OfferDetailsScope} from "@vcmp-vendor-portal/modules";
import * as _ from "lodash-es";
import { IOffer, SellerProduct } from "@vcmp-vendor-portal/api/marketplacevendor";

export type ExtendedOfferDetailsScope = OfferDetailsScope & {
  toolbarOverrides: {
    showAlert: IBladeToolbar;
  };
};

export const useOfferDetails = (
  args: DetailsComposableArgs<{ options: { sellerProduct: SellerProduct } }>,
): UseDetails<IOffer, OfferDetailsScope> => {
  const { load, saveChanges, remove, loading, item, validationState, scope, bladeTitle } =
    modules.Offers.composables.useOfferDetails(args);

  // Adding a new method that will be called by new toolbar button
  function clickMe() {
    alert("I'm alert!");
  }

  // Extending useOfferDetails 'scope' and adding a new 'showAlert' method representing 'method' key of new toolbar button:
  const extendedScope: ExtendedOfferDetailsScope = _.merge(scope, {
    toolbarOverrides: {
      showAlert: {
        clickHandler() {
          clickMe();
        },
        isVisible: true,
      },
    },
  });

  return {
    load,
    saveChanges,
    remove,
    loading,
    item,
    validationState,
    scope: extendedScope,
    bladeTitle,
  };
};

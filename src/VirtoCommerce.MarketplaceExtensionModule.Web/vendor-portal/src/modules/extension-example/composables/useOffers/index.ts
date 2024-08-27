/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListComposableArgs, TOpenBladeArgs, UseList, useBladeNavigation } from "@vc-shell/framework";
import { ISearchOffersQuery, Offer } from "@vcmp-vendor-portal/api/marketplacevendor";
import modules, { OffersListScope } from "@vcmp-vendor-portal/modules";
import * as _ from "lodash-es";

export type ExtendedOffersScope = OffersListScope & {
  openDetailsBlade: (data?: TOpenBladeArgs) => Promise<void>;
};

export const useOffers = (
  args: ListComposableArgs<{
    options: {
      sellerProduct: any;
    };
  }>,
): UseList<Offer[], ISearchOffersQuery, OffersListScope> => {
  const { load, items, loading, query, pagination, remove, scope } = modules.Offers.composables.useOffersList(args);

  const { openBlade, resolveBladeByName } = useBladeNavigation();

  async function openDetailsBlade(data?: TOpenBladeArgs) {
    await openBlade({
      blade: resolveBladeByName("OfferExtended"),
      options: {
        sellerProduct: args.props?.options?.sellerProduct,
      },
      ...data,
    });
  }

  const extendedScope: ExtendedOffersScope = _.merge(scope, {
    openDetailsBlade,
  });

  return {
    load,
    items,
    loading,
    query,
    pagination,
    remove,
    scope: extendedScope,
  };
};

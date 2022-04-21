/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SalesResponseViewModel } from './SalesResponseViewModel';

export type SalesMasterViewModel = {
    id: number;
    guid: string;
    date: string;
    sales: Array<SalesResponseViewModel>;
    totalAmountTRY: number;
};
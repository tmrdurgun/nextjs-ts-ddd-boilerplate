/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserViewModel = {
    id: number;
    ssoUserId?: string;
    firstName: string;
    lastName: string;
    userName: string;
    phone?: string;
    address?: string;
    birthDate?: string;
    gender?: string;
    identityNumber?: string;
    isTurkishCitizen: boolean;
    countryId?: number;
    cityId?: number;
    postalCode?: string;
    districtName?: string;
};
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserUpdateViewModel = {
    firstName: string;
    lastName: string;
    phone: string;
    address?: string;
    birthDate?: string;
    /**
     * F or M
     */
    gender: string;
    identityNumber?: string;
    isTurkishCitizen: boolean;
    countryId?: number;
    cityId?: number;
};
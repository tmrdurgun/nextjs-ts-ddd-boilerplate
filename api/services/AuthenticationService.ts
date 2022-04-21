/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyResponseViewModel } from '../models/EmptyResponseViewModel';
import type { PasswordResetViewModel } from '../models/PasswordResetViewModel';
import type { PasswordUpdateViewModel } from '../models/PasswordUpdateViewModel';
import type { RefreshTokenRequestViewModel } from '../models/RefreshTokenRequestViewModel';
import type { RegisterViewModel } from '../models/RegisterViewModel';
import type { TokenRequestViewModel } from '../models/TokenRequestViewModel';
import type { TokenViewModel } from '../models/TokenViewModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthenticationService {

    /**
     * Token
     * Gets access token by username and password
     * @param body 
     * @returns TokenViewModel Success
     * @throws ApiError
     */
    public static token(
body?: TokenRequestViewModel,
): CancelablePromise<TokenViewModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/token',
            body: body,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Token Refresh
     * Gets access token by refresh token
     * @param body 
     * @returns TokenViewModel Success
     * @throws ApiError
     */
    public static tokenRefresh(
body?: RefreshTokenRequestViewModel,
): CancelablePromise<TokenViewModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/token/refresh',
            body: body,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Register
     * Registers an user
     * @param body 
     * @returns EmptyResponseViewModel Success
     * @throws ApiError
     */
    public static register(
body?: RegisterViewModel,
): CancelablePromise<EmptyResponseViewModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/register',
            body: body,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Password Reset
     * I forgot my password
     * @param body 
     * @returns EmptyResponseViewModel Success
     * @throws ApiError
     */
    public static passwordReset(
body?: PasswordResetViewModel,
): CancelablePromise<EmptyResponseViewModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/password/reset',
            body: body,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Password Update
     * Updates a password
     * @param authorization Authorization
     * @param body 
     * @returns EmptyResponseViewModel Success
     * @throws ApiError
     */
    public static passwordUpdate(
authorization: string,
body?: PasswordUpdateViewModel,
): CancelablePromise<EmptyResponseViewModel> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/auth/password/update',
            headers: {
                'authorization': authorization,
            },
            body: body,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
            },
        });
    }

}
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyResponseViewModel } from '../models/EmptyResponseViewModel';
import type { UserUpdateViewModel } from '../models/UserUpdateViewModel';
import type { UserViewModel } from '../models/UserViewModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Profile
     * Gets profile by token
     * @param authorization Authorization
     * @returns UserViewModel Success
     * @throws ApiError
     */
    public static getUser(
authorization: string,
): CancelablePromise<UserViewModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
            headers: {
                'authorization': authorization,
            },
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
     * Profile
     * Updates profile by token
     * @param authorization Authorization
     * @param body 
     * @returns EmptyResponseViewModel Success
     * @throws ApiError
     */
    public static updateUser(
authorization: string,
body?: UserUpdateViewModel,
): CancelablePromise<EmptyResponseViewModel> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users',
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
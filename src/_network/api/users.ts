import {
    PaginationData,
    PaginationResponse
} from '../../_interfaces/pagination';
import { User } from '../../_interfaces/user';
import { client } from '../api';

export interface AuthLoginCredentials {
    email: string;
    password: string;
}

export interface AuthSignInCredentials {
    username: string;
    email: string;
    password: string;
}


const path = 'users';

export async function list(pagination?: PaginationData) {
    await new Promise((res) => setTimeout(res, 1000));

    let requestPath = path;

    if (pagination) {
        const { page, perPage } = pagination;
        requestPath = `${requestPath}?_page=${page}&_per_page=${perPage}`;
    }

    const { data } = await client.get<PaginationResponse<User>>(requestPath);
    return data;
}

import {
    PaginationData,
    PaginationResponse
} from '../../_interfaces/pagination';
import { IUser } from '../../_interfaces/user';
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
export async function list(pagination?: PaginationData): Promise<PaginationResponse<IUser> | IUser[]> {
    await new Promise((res) => setTimeout(res, 1000));
    let requestPath = path;

    if (pagination) {
        const { page, perPage } = pagination;
        requestPath = `${requestPath}?_page=${page}&_per_page=${perPage}`;
        const { data } = await client.get<PaginationResponse<IUser>>(requestPath);
        return data;
    }
    const { data } = await client.get<IUser[]>(requestPath);
    return data;
}

export async function findById(id: string): Promise<IUser> {
    const { data } = await client.get<IUser>(`${path}/${id}`);
    return data;
}

export async function findByEmail(email: string): Promise<IUser[]> {
    const { data } = await client.get<IUser[]>(`${path}?email=${email}`);
    return data;
}

export async function create(user: IUser): Promise<void> {
    await client.post(`${path}`, user);
}

export async function update(id: string, user: IUser): Promise<void> {
    await client.put(`${path}/${id}`, user);
}

export async function remove(id: string): Promise<void> {
    await client.delete(`${path}/${id}`);
}
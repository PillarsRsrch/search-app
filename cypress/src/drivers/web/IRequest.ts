import { HTTPMethod } from './HTTPMethod';

export interface IRequest {
    url: string;
    method: HTTPMethod;
    body?: Record<string, any>;
    headers?: Record<string, any>;
}

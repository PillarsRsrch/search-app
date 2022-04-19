export interface IHTTPService {
    getAsync(url: string): Promise<any>;
}

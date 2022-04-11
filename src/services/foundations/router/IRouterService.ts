import { PageTransition } from '../../../models/router/PageTransition';

export interface IRouterService {
    navigate(transition: PageTransition): Promise<void>;
}

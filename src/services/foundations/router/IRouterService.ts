import { PageTransition } from '../../../models/routers/PageTransition';

export interface IRouterService {
    navigate(transition: PageTransition): Promise<void>;
}

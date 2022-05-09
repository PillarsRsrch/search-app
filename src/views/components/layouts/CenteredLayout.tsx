import { Center } from '../../bases/center/Center';
import { FlexLayout } from '../../bases/layout/FlexLayout';
import { ICenteredLayoutProps } from './ICenteredLayoutProps';

export const CenteredLayout = ({ children }: ICenteredLayoutProps) => (
    <Center>
        <FlexLayout
            className="centered-layout"
            styles={{
                height: '100vh',
                alignItems: 'center',
            }}
        >
            {children}
        </FlexLayout>
    </Center>
);

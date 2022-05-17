import React from 'react';
import { useDriveList } from '../../../../hooks/google-drive/useDriveList';
import { Text } from '../../../bases/text/Text';
import { DriveListState } from '../../../pages/data-sources/create-data-source/DriveListState';
import { IDriveListProps } from './IDriveListProps';

export const DriveList = ({ googleDriveService }: IDriveListProps) => {
    const [driveList, driveListState] = useDriveList(googleDriveService);
    const componentMap = new Map([
        [DriveListState.Loading, <Text>Loading...</Text>],
        [DriveListState.NoDrives, <Text>No Drives Found</Text>],
        [
            DriveListState.LoadedDrives,
            <>
                {driveList.map((drive) => (
                    <Text key={drive.id()}>{drive.name()}</Text>
                ))}
            </>,
        ],
    ]);

    return <>{componentMap.get(driveListState)}</>;
};

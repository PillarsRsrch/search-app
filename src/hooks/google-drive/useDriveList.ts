import { useEffect, useState } from 'react';
import { IGoogleDrive } from '../../models/google-drive/IGoogleDrive';
import { IGoogleDriveService } from '../../services/foundations/google-drive/IGoogleDriveService';
import { DriveListState } from '../../views/pages/data-sources/create-data-source/DriveListState';

export function useDriveList(
    googleDriveService: IGoogleDriveService
): [IGoogleDrive[], DriveListState] {
    const [driveList, setDriveList] = useState<IGoogleDrive[]>([]);
    const [driveListState, setDriveListState] = useState(
        DriveListState.Loading
    );

    useEffect(() => {
        async function getDriveList() {
            const driveList = await googleDriveService.getAllDrivesAsync();
            if (driveList.length === 0) {
                setDriveListState(DriveListState.NoDrives);
            } else {
                setDriveListState(DriveListState.LoadedDrives);
            }
            setDriveList(driveList);
        }

        getDriveList();
    }, []);

    return [driveList, driveListState];
}

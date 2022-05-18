import { anything, instance, mock, reset, verify, when } from 'ts-mockito';
import { IMapper } from '../../../../src/mappers/IMapper';
import { IGoogleDrive } from '../../../../src/models/google-drive/IGoogleDrive';
import { IGoogleDriveResource } from '../../../../src/repositories/google-drive/resources/IGoogleDriveResource';
import { IAsyncRepository } from '../../../../src/repositories/IAsyncRepository';
import { GoogleDriveService } from '../../../../src/services/foundations/google-drive/GoogleDriveService';
import { resolvableInstance } from '../../../extensions/resolvableInstance';

describe('Google Drive Service Test Suite', () => {
    const mockedRepository = mock<IAsyncRepository<IGoogleDriveResource>>();
    const mockedMapper = mock<IMapper<IGoogleDriveResource, IGoogleDrive>>();
    const mockedGoogleDrive = mock<IGoogleDrive>();
    const mockedGoogleDriveResource = mock<IGoogleDriveResource>();
    const repository = instance(mockedRepository);
    const mapper = instance(mockedMapper);
    const googleDrive = resolvableInstance(mockedGoogleDrive);
    const googleDriveResource = resolvableInstance(mockedGoogleDriveResource);
    const service = new GoogleDriveService(repository, mapper);

    beforeEach(() => {
        reset(mockedRepository);
        reset(mockedMapper);
        reset(mockedGoogleDrive);
    });

    describe('getAllDrivesAsync', () => {
        test('Should get all drives', async () => {
            const expectedDrive = googleDrive;
            when(mockedGoogleDrive.id()).thenReturn('driveId');
            when(mockedGoogleDrive.name()).thenReturn('drive name');
            when(mockedRepository.getAll()).thenResolve([googleDriveResource]);
            when(mockedMapper.map(anything())).thenReturn(googleDrive);

            const drives = await service.getAllDrivesAsync();

            verify(mockedRepository.getAll()).once();
            verify(mockedMapper.map(anything())).once();
            expect(drives).toHaveLength(1);
            expect(drives[0].id()).toEqual(expectedDrive.id());
        });
    });
});

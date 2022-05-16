import { anything, instance, mock, reset, verify, when } from 'ts-mockito';
import { IMapper } from '../../../../src/mappers/IMapper';
import { IDataSource } from '../../../../src/models/data/IDataSource';
import { IRepository } from '../../../../src/repositories/IRepository';
import { LocalStorageRecord } from '../../../../src/repositories/local-storage/LocalStorageRecord';
import { LocalStorageDataSourceService } from '../../../../src/services/foundations/data-sources/LocalStorageDataSourceService';
import { resolvableInstance } from '../../../extensions/resolvableInstance';

describe('Local Storage Data Source Service', () => {
    const mockedRepository = mock<IRepository<LocalStorageRecord>>();
    const mockedMapper = mock<IMapper<LocalStorageRecord, IDataSource>>();
    const mockedDataSource = mock<IDataSource>();
    const repository = instance(mockedRepository);
    const mapper = instance(mockedMapper);
    const dataSource = resolvableInstance(mockedDataSource);
    const service = new LocalStorageDataSourceService(repository, mapper);

    beforeEach(() => {
        reset(mockedRepository);
        reset(mockedMapper);
        reset(mockedDataSource);
    });

    describe('getAllDataSources', () => {
        test('Should get all data sources from local storage', async () => {
            const expectedName = 'lab drive';
            const expectedSources = [dataSource];
            when(mockedDataSource.name()).thenReturn(expectedName);
            when(mockedRepository.getAll()).thenReturn([{}]);
            when(mockedMapper.map(anything())).thenReturn(dataSource);

            const sources = await service.getAllDataSources();

            expect(sources).toHaveLength(1);
            expect(sources[0].name()).toEqual(expectedSources[0].name());
            verify(mockedMapper.map(anything())).once();
            verify(mockedRepository.getAll()).once();
        });
    });

    describe('createDataSource', () => {
        test('Should create a data source and store it in local storage', async () => {
            const expectedSource = dataSource;
            const inputSource = expectedSource;
            when(mockedMapper.inverseMap(anything())).thenReturn({});
            when(mockedMapper.map(anything())).thenReturn(dataSource);
            when(mockedRepository.create(anything())).thenReturn({});

            const actualSource = await service.createDataSource(inputSource);

            expect(actualSource.name()).toEqual(expectedSource.name());
            verify(mockedMapper.inverseMap(anything())).once();
            verify(mockedMapper.map(anything())).once();
            verify(mockedRepository.create(anything())).once();
        });
    });
});

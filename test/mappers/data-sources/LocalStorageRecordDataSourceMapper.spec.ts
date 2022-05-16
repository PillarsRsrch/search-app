import { instance, mock, reset, when } from 'ts-mockito';
import { LocalStorageRecordDataSourceMapper } from '../../../src/mappers/data-sources/LocalStorageRecordDataSourceMapper';
import { DataSourceTypes } from '../../../src/models/data/DataSourceTypes';
import { IDataSource } from '../../../src/models/data/IDataSource';

describe('Local Storage Record Data Source Mapper', () => {
    const mockedDataSource = mock<IDataSource>();
    const dataSource = instance(mockedDataSource);
    const mapper = new LocalStorageRecordDataSourceMapper();

    beforeEach(() => {
        reset(mockedDataSource);
    });

    test('map', () => {
        const expectedDataSource = dataSource;
        const expectedName = 'Data Source';
        const expectedType = DataSourceTypes.GoogleDrive;
        when(mockedDataSource.name()).thenReturn(expectedName);
        when(mockedDataSource.type()).thenReturn(expectedType);
        when(mockedDataSource.id()).thenReturn(expectedName);

        const actualDataSource = mapper.map({
            name: expectedName,
            type: DataSourceTypes.GoogleDrive,
        });

        expect(actualDataSource.name()).toEqual(expectedDataSource.name());
        expect(actualDataSource.id()).toEqual(expectedDataSource.id());
        expect(actualDataSource.type()).toEqual(expectedDataSource.type());
    });

    test('inverseMap', () => {
        const expectedName = 'Data Source';
        const expectedType = DataSourceTypes.GoogleDrive;
        const expectedRecord = {
            name: expectedName,
            type: expectedType,
            id: expectedName,
        };
        when(mockedDataSource.name()).thenReturn(expectedName);
        when(mockedDataSource.id()).thenReturn(expectedName);
        when(mockedDataSource.type()).thenReturn(expectedType);

        const actualRecord = mapper.inverseMap(dataSource);

        expect(actualRecord).toEqual(expectedRecord);
    });
});

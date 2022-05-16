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

        const actualDataSource = mapper.map({
            name: expectedName,
            type: DataSourceTypes.GoogleDrive,
        });

        expect(actualDataSource.name()).toEqual(expectedDataSource.name());
        expect(actualDataSource.type()).toEqual(expectedDataSource.type());
    });

    test('unmap', () => {
        const expectedName = 'Data Source';
        const expectedType = DataSourceTypes.GoogleDrive;
        const expectedRecord = {
            name: expectedName,
            type: expectedType,
        };
        when(mockedDataSource.name()).thenReturn(expectedName);
        when(mockedDataSource.type()).thenReturn(expectedType);

        const actualRecord = mapper.inverseMap(dataSource);

        expect(actualRecord).toEqual(expectedRecord);
    });
});

import { instance, mock, reset, when } from 'ts-mockito';
import { FormDataSourceMapper } from '../../../src/mappers/data-sources/FormDataSourceMapper';
import { DataSourceTypes } from '../../../src/models/data/DataSourceTypes';
import { IDataSource } from '../../../src/models/data/IDataSource';
import { IForm } from '../../../src/models/form/IForm';

describe('Form Data Source Mapper Test Suite', () => {
    const mockedForm = mock<IForm>();
    const mockedDataSource = mock<IDataSource>();
    const form = instance(mockedForm);
    const dataSource = instance(mockedDataSource);
    const mapper = new FormDataSourceMapper();

    beforeEach(() => {
        reset(mockedForm);
        reset(mockedDataSource);
    });

    describe('map', () => {
        test('Should map a form to a data source', () => {
            const inputForm = form;
            const expectedName = 'Data Source';
            const expectedType = DataSourceTypes.GoogleDrive;
            const expectedDataSource = dataSource;
            when(mockedForm.getField<string>('name')).thenReturn(expectedName);
            when(mockedForm.getField<DataSourceTypes>('type')).thenReturn(
                expectedType
            );
            when(mockedDataSource.name()).thenReturn(expectedName);
            when(mockedDataSource.type()).thenReturn(expectedType);

            const actualDataSource = mapper.map(inputForm);

            expect(actualDataSource.name()).toEqual(expectedDataSource.name());
            expect(actualDataSource.type()).toEqual(expectedDataSource.type());
        });
    });
});

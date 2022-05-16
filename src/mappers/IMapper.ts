export interface IMapper<From, To> {
    map(object: From): To;
    inverseMap(project: To): From;
}

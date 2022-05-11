export interface IProjectDomainLanguage {
    navigateToProjects(): Promise<void>;
    createProjectWithImportedData(): Promise<void>;
    assertProjectCreated(): void;
}

export interface IProjectDriver {
    navigateToProjects(): Promise<void>;
    createProjectWithImportedData(): Promise<void>;
    assertProjectCreated(): void;
}

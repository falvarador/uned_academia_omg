export interface CategoryRepositoryInterface {
  getCategories(): Promise<KeyPairValue[]>;
}

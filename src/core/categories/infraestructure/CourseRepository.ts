import { CategoryRepositoryInterface } from "../domain/abstractions/CategoryRepositoryInterface";

export class CategoryRepository implements CategoryRepositoryInterface {
  constructor() {}

  async getCategories(): Promise<KeyPairValue[]> {
    const response = await fetch("/assets/categories.json");
    const values = (await response.json()) as KeyPairValue[];

    return values || [];
  }
}

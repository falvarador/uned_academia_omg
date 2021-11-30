import { CourseRepositoryInterface } from "../domain/abstractions/CourseRepositoryInterface";

export class CourseRepository implements CourseRepositoryInterface {
  constructor() {}

  async getCourses(): Promise<KeyPairValue[]> {
    const response = await fetch("/assets/courses.json");
    const values = (await response.json()) as KeyPairValue[];

    return values || [];
  }
}

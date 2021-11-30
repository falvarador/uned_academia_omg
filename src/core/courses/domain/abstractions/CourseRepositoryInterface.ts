export interface CourseRepositoryInterface {
  getCourses(): Promise<KeyPairValue[]>;
}

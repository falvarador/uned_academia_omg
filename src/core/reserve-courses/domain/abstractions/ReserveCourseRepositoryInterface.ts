import { ReserveCourse } from "../models/ReserveCourse";

export interface ReserveCourseRepositoryInterface {
  delete(): void;
  get(): ReserveCourse;
  getAll(): ReserveCourse[];
  save(course: ReserveCourse): void;
}

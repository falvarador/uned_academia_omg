import { ReserveCourse } from "../domain/models/ReserveCourse";
import { ReserveCourseRepositoryInterface } from "../domain/abstractions/ReserveCourseRepositoryInterface";

export class ReserveCourseLocalStorageRepository implements ReserveCourseRepositoryInterface {
  constructor() {}
  delete(): void {
    localStorage.removeItem("reserve-courses");
  }

  get(): ReserveCourse {
    return this.getAll().find((course) => course.id === course.id) as ReserveCourse;
  }

  getAll(): ReserveCourse[] {
    const json = localStorage.getItem("reserve-courses") || "";
    return json ? (JSON.parse(json) as ReserveCourse[]) : [];
  }

  save(course: ReserveCourse): void {
    const json = localStorage.getItem("reserve-courses") || "";
    const courses = json ? (JSON.parse(json) as ReserveCourse[]) : [];

    courses.push(course);
    localStorage.setItem("reserve-courses", JSON.stringify(courses));
  }
}

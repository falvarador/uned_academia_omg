import { CategoryRepository } from "../../categories/infraestructure/CourseRepository";
import { CategoryRepositoryInterface } from "../../categories/domain/abstractions/CategoryRepositoryInterface";
import { CourseRepository } from "../../courses/infraestructure/CourseRepository";
import { CourseRepositoryInterface } from "../../courses/domain/abstractions/CourseRepositoryInterface";
import { ReserveCourse } from "../domain/models/ReserveCourse";
import { ReserveCourseLocalStorageRepository } from "../infraestructure/ReserveCourseLocalStorageRepository";
import { ReserveCourseRepositoryInterface } from "../domain/abstractions/ReserveCourseRepositoryInterface";
import Notification from "../../sharedKernel/models/Notification";

export class ReserveCoursePloc {
  constructor() {
    this._categoryRepository = new CategoryRepository();
    this._courseRepository = new CourseRepository();
    this._repository = new ReserveCourseLocalStorageRepository();
  }

  private _categoryRepository: CategoryRepositoryInterface;
  private _courseRepository: CourseRepositoryInterface;
  private _repository: ReserveCourseRepositoryInterface;

  async getCategories(): Promise<KeyPairValue[]> {
    return this._categoryRepository.getCategories();
  }

  async getCourses(): Promise<KeyPairValue[]> {
    return this._courseRepository.getCourses();
  }

  saveReserveCourse(course: ReserveCourse): void {
    this._repository.save(course);
  }

  validateReserveCourse(property: string, value: string): Notification {
    switch (property) {
      case "id":
        return ReserveCourse.validateId(Number(value));
      case "name":
        return ReserveCourse.validateName(value);
      case "email":
        return ReserveCourse.validateEmail(value);
      case "category":
        return ReserveCourse.validateCategory(value);
      case "course":
        return ReserveCourse.validateCourse(value);
      case "message":
        return ReserveCourse.validateMessage(value);

      default:
        return new Notification();
    }
  }
}

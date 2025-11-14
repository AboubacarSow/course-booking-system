export interface Student {
  id:number,
  name:string,
  email:string,
  phoneNumber?:string,
  enrolledCourseIds?:number[],
  registrationDate?:string
}

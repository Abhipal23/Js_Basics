// object destructing 

const course={
    cousName:"js in hindi",
    courseFee:"999",
    courseInstructor:"hitesh"
}

// how to access coueseNmae and coursefee

  // 1 way 
  //   course.courseInstructor


  // another way 

  //const {courseInstructor}=course

  //console.log(courseInstructor);

  // we can change name also 

  const {courseInstructor:inst}=course 

  console.log(inst);
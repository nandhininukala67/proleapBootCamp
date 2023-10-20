let course = new Map

course.set('react',{description :'ui'})
course.set('jest',{description :'testing'})
course.set('node',{description :'backend'})
course.set('express',{description :'framework'})
course.set(123, true)
// key value pair
console.log(course)
console.log(course.get('express'))
console.log(course.has("express"))
console.log(course.keys())
console.log(course.values())
console.log(course.entries())

course.forEach((value, key)=> console.log(key, value))
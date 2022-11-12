// Course component 

const Course = ({ course }) => {
  return (
    <div>
      <h1>
        {course.name}
      </h1>
      {course.parts.map(x => 
        <Part key={x.id} part={x} />  
      )}
      <SumOfParts parts={course.parts} />
    </div>
  )
}

const Part = ({ part }) => {
  return(
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const SumOfParts = ({ parts }) => {
  return(
    <b>
      total of {parts.reduce((prev, current) => prev + current.exercises, 0)} exercises
    </b>
  )
}

export default Course
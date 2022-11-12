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


export default Course
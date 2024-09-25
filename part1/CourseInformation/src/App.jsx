const App = ()=> {
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'States of a component'
  const exercises3 = 14

  const Header = (props)=> {
    return(
      <h1>{props.course}</h1>
    )
  }

  const Part1 = (props)=> {
    return(
      <p>
        {props.part1} {props.exercise1}
      </p>
    )
  }

  const Part2 = (props)=> {
    return(
      <p>
        {props.part2} {props.exercise2}
      </p>
    )
  }

  const Part3 = (props)=> {
    return(
      <p>
        {props.part3} {props.exercise3}
      </p>
    )
  }

  const Content = (props)=> {
    return(
      <div>
        <Part1 part1={part1} exercise1={exercises1}/>
        <Part2 part2={part2} exercise2={exercises2}/>
        <Part3 part3={part3} exercise3={exercises3}/>
      </div>
    )
  }

  const Total = (props)=> {
    return(
      <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
    )
  }
  return(
    <div>
      <Header course={course} />
      <Content />
      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3}/>
    </div>
  )
}
export default App
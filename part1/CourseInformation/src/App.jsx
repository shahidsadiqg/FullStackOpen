const App = () => {
  const course = 'Half Stack Application Development';
  const parts = [ 
    {
    name: 'Fundamentals of React',
    exercises: 10,
  },
  {
    name: 'Using props to pass data',
    exercises: 7,
  },
  {
    name: 'States of a component',
    exercises: 14,
  }
]

  const Header = ({ course }) => {
    return <h1>{course}</h1>;
  };

  const Part = ({ name , exercises }) => {
    return (
      <p>
        {name} {exercises}
      </p>
    );
  };

  const Content = () => {
    return (
      <div>
        <Part name={parts[0].name} exercises={parts[0].exercises} />
        <Part name={parts[1].name} exercises={parts[1].exercises} />
        <Part name={parts[2].name} exercises={parts[2].exercises} />
      </div>
    );
  };

  const Total = ({ exercises1, exercises2, exercises3 }) => {
    return (
      <p>
        Number of exercises {exercises1 + exercises2 + exercises3}
      </p>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
    </div>
  );
};

export default App;
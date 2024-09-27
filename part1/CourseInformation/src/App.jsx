const App = () => {
  const course = 'Half Stack Application Development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'States of a component',
    exercises: 14,
  };

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
        <Part name={part1.name} exercises={part1.exercises} />
        <Part name={part2.name} exercises={part2.exercises} />
        <Part name={part3.name} exercises={part3.exercises} />
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
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  );
};

export default App;
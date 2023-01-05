

function BackFocus(props) {
    const data = [
      { exercises: 'Deadlift', sets: "3-4", reps: '6-8' },
      { exercises: 'Incline Bench Press (Dumbbell)', sets: "3-4", reps: '6-8' },
      { exercises: 'Seated Cable Row/Pull Ups', sets: "3", reps: '8-10' },
      { exercises: 'Romanian Deadlift', sets: "3", reps: '8-10' },
      { exercises: 'Lateral Raise ', sets: "3", reps: '10-12' },
  
  
    ];
  
    return (
      <table>
        <tr>
          <th>Exercise</th>
          <th>Sets</th>
          <th>Reps</th>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.exercises}</td>
            <td>{item.sets}</td>
            <td>{item.reps}</td>
          </tr>
        ))}
      </table>
    );
  }
  
  export default BackFocus;
  
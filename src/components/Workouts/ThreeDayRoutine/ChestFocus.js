

function ChestFocus(props) {
    const data = [
      { exercises: 'Barbell Bench Press', sets: "3-4", reps: '6-8' },
      { exercises: 'Bent Over Barbell Row', sets: "3-4", reps: '6-8' },
      { exercises: 'Military Press', sets: "3-4", reps: '6-8' },
      { exercises: 'Leg Press', sets: "3", reps: '8-10' },
      { exercises: 'Chest Fly ', sets: "3", reps: '10-12' },
  
  
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
  
  export default ChestFocus;
  
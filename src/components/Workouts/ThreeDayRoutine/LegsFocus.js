

function LegFocus(props) {
    const data = [
      { exercises: 'Squats', sets: "3-4", reps: '6-8' },
      { exercises: 'Incline Close Grip Bench Press', sets: "3-4", reps: '6-10' },
      { exercises: 'Chin Ups', sets: "3-4", reps: '6-10' },
      { exercises: 'RDL', sets: "3", reps: '8-10' },
      { exercises: 'RearDelt Fly', sets: "3", reps: '10-12' },
  
  
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
  
  export default LegFocus;
  
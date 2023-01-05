import React from 'react'



function LowerTwo(props) {
    const data = [
      { exercises: 'Deadlift', sets: "4-6", reps: '6-8' },
      { exercises: 'Leg Curl', sets: "3-4", reps: '6-8' },
      { exercises: 'Lunges', sets: "3", reps: '8-10' },
      { exercises: 'Calf Raise', sets: "3", reps: '8-10' },

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
  

  


export default LowerTwo
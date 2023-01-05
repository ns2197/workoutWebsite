import React from 'react'



function LowerOne(props) {
    const data = [
      { exercises: 'Squats', sets: "3-4", reps: '4-6' },
      { exercises: 'Leg Press', sets: "3-4", reps: '6-8' },
      { exercises: 'Bulgarian Squats', sets: "3", reps: '8-10' },
      { exercises: 'Romanian Deadlift', sets: "3", reps: '8-10' },

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
  

  


export default LowerOne
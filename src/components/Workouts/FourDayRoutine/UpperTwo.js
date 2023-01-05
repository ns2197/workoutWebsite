import React from 'react'



function UpperTwo(props) {
    const data = [
      { exercises: 'Incline Bench Press', sets: "3-4", reps: '6-8' },
      { exercises: 'Pull Ups', sets: "3-4", reps: '6-8' },
      { exercises: 'Lateral Raise', sets: "3", reps: '8-10' },
      { exercises: 'Row(any kind)', sets: "3", reps: '8-10' },
      { exercises: 'Incline Dumbbell Curl', sets: "3", reps: '10-12' },
      { exercises: 'Overhead Cable Extension', sets: "3", reps: '10-12' },
  
  
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
  

  


export default UpperTwo
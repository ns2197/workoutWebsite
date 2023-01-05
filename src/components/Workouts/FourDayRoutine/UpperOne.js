import React from 'react'



function UpperOne(props) {
    const data = [
      { exercises: 'Bench Press', sets: "3-4", reps: '6-8' },
      { exercises: 'Barbell Row', sets: "3-4", reps: '6-8' },
      { exercises: 'Military Press', sets: "3", reps: '8-10' },
      { exercises: 'Lat Pulldown', sets: "3", reps: '8-10' },
      { exercises: 'Triceps Pushdown', sets: "3", reps: '10-12' },
      { exercises: 'Preacher Curl', sets: "3", reps: '10-12' },
  
  
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
  

  


export default UpperOne
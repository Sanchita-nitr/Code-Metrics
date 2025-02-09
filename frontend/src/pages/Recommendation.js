// /**
//  * The `Recommendation` component in React displays a list of coding recommendations using an array of suggestions.
//  * @returns The `Recommendation` component is being returned, which displays a list of recommendations for enhancing coding skills. The recommendations are mapped over and displayed as list items within an unordered list.
//  */
// import React from "react";

// const Recommendation = () => {
//   const recommendations = [
//     "Practice Data Structures and Algorithms daily.",
//     "Build a real-world project to enhance skills.",
//     "Participate in coding competitions.",
//     "Learn a new programming language.",
//     "Work on open-source projects.",
//   ];

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
//       <ul className="list-disc ml-6 text-gray-700">
//         {recommendations.map((rec, index) => (
//           <li key={index}>{rec}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Recommendation;
import React from 'react';

const Recommendation = ({ data }) => {
  return (
    <div>
      <h2>Recommendations</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <strong>{item.title}:</strong> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;

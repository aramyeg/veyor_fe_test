import React from "react";

export default function MyLaneHeader({title}) {

  switch (title){
    case 'Contacted':
      return <div className={`text-center bg-offish-white text-lg font-semibold border-b-2 border-b-contacted-blue p-3`}>{title}</div>
    case 'First meeting':
      return <div className={`text-center bg-offish-white text-lg font-semibold border-b-2 border-b-meeting-purple p-3`}>{title}</div>
    default:
      return <div className={`text-center bg-offish-white text-lg font-semibold border-b-2 border-b-target-pink p-3`}>{title}</div>
  }
}
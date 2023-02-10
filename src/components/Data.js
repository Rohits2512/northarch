import React, { useState } from "react";
import Editable from "./Editable";
import { IndividualData } from "./IndividualData";

export const Data = (props) => {
  const { excelData , setExcelData} = props;

  const [editData, setEditData] = useState(null);

  const handleEdit = (event, individualExcelData) => {
    event.preventDefault();
    setEditData(individualExcelData.Id);
  };

  const handleEditFormChange = (event,iData) => {

    
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...iData };
    newFormData[fieldName] = fieldValue;

    setEditData(newFormData);
    console.log(editData);
  };

  return excelData.map((individualExcelData) => (
    <tr key={individualExcelData.Id}>
      {editData === individualExcelData.Id ? (
        <Editable handleEditFormChange={handleEditFormChange} editData={editData}/>
      ) : (
        <IndividualData
          individualExcelData={individualExcelData}
          handleEdit={handleEdit}
        />
      )}
    </tr>
  ));
};

// import React from "react";

// function Data(props) {
//   const { items } = props;
//   return items?.map((item) => {
//     <tr key={item.Id}>
//       <th>{item.Id}</th>
//       <th>{item.Name}</th>
//       <th>{item.JoiningDate}</th>
//       <th>{item.EmailAddress}</th>
//       <th>{item.Department}</th>
//       <th>{item.MonthlySalary}</th>
//       <th>{item.JobStatus}</th>
//     </tr>;
//   });
// }

export default Data;

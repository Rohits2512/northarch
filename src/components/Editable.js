import React from "react";

function Editable(props) {
    const {individualExcelData, handleEditFormChange , editData} =props;
  return (
    <>
      <th>
        <input
          type="text"
          required="required"
          name="Id"
          //value={editData}
          onChange={(event)=>handleEditFormChange(event, individualExcelData)}
          placeholder="Enter a ID"
        ></input>
        <div></div>
      </th>
      <th>
        <input
          type="text"
          required="required"
          name="Name"
          //value={editData}
          onChange={(event)=>handleEditFormChange(event, individualExcelData)}

          placeholder="Enter a Name"
        ></input>
      </th>
      <th>
        <input
          type="text"
          required="required"
          name="JoiningDate"
          //value={editData}
          onChange={(event)=>handleEditFormChange(event, individualExcelData)}

          placeholder="Enter a "
        ></input>
      </th>
      <th>
        <input
          type="text"
          required="required"
          name="EmailAddress"
          //value={editData}
          onChange={(event)=>handleEditFormChange(event, individualExcelData)}

          placeholder="Enter a "
        ></input>
      </th>
      <th>
        <input
          type="text"
          required="required"
          name="Department"
          //value={editData}
          onChange={(event)=>handleEditFormChange(event, individualExcelData)}

          placeholder="Enter a "
        ></input>
      </th>
      <th>
        <input
          type="text"
          required="required"
          name="MonthlySalary"
          //value={editData}
          onChange={(event)=>handleEditFormChange(event, individualExcelData)}

          placeholder="Enter a "
        ></input>
      </th>
      <th>
        <input
          type="text"
          required="required"
          name="JobStatus"
          //value={}
          onChange={(event)=>handleEditFormChange(event, individualExcelData)}

          placeholder="Enter a JobStatus"
        ></input>
      </th>
    </>
  );
}

export default Editable;

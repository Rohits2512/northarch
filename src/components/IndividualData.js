import React from 'react'

export const IndividualData = (props) => {
    const {individualExcelData, handleEdit} =props;
    return (
        <>
            <th>{individualExcelData.Id}</th>
            <th>{individualExcelData.Name}</th>
            <th>{individualExcelData.JoiningDate}</th>
            <th>{individualExcelData.EmailAddress}</th>
            <th>{individualExcelData.Department}</th>
            <th>{individualExcelData.MonthlySalary}</th>
            <th>{individualExcelData.JobStatus}</th>
            <th><button onClick={(event )=> handleEdit(event, individualExcelData)}>Edit</button></th>
        </>
    )
}
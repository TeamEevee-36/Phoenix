import React, { useEffect, useState } from 'react';

const Day = (props) => {
  const resList = props.resList;
  //loop through and display the name and status for each of the elements
  const dayArr = [];
  useEffect(() => {
    resList.forEach((ele) => {
      // push to array -> 1. name 2. ternary operator containing three options but value will be based on database

      const choices = ['not started', 'in progress', 'completed'];
      const optionsArr = [];

      choices.forEach((choice) => {
        if (choice === resList.resolution_status) {
          optionsArr.push(
            <option value={choice} selected>
              {choice}
            </option>
          );
        } else {
          optionsArr.push(<option value={choice}>{choice}</option>);
        }
      });

      dayArr.push(
        <>
          <span>{ele.resolution_name}</span>
          <select>{optionsArr}</select>
        </>
      );
      console.log('dayarr', dayArr);
      // for status: if conditional to check if started, not started, done; depending on this, set value of dropdown box
      // initialize an empty array
    });
  });

  return (
    <>
      <p>{props.day}</p>
      {dayArr}
    </>
  );
};

export default Day;

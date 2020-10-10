import React from "react";

export let requiredField = value=>value?undefined:("Required field")

export let maxLengthCreator = length => value =>{
    debugger
    return (value&&value.length<length)?undefined:(`Max size ${length} symbols`)
}
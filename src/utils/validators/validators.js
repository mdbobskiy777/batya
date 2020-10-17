import React from "react";

export let requiredField = value=>value?undefined:("Required field")

export let maxLengthCreator = length => value =>{

    return (value&&value.length<length)?undefined:(`Max size ${length} symbols`)
}
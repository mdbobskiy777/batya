export let requiredField = value => value ? undefined : ("Required field")
export let maxLengthCreator = length =>
        value => (value && value.length < length) ? undefined : (`Max size ${length} symbols`)

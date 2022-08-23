export const requiredField = value => value ? undefined : 'Field is required';

export const maxLengthThunk = maxLength => value => value.length > maxLength ? `Max length is ${maxLength} sybmlos` : undefined;
// The array of objects with input data
export const testsConfirmPassword = [{
    title: 'Value is empty',
    confirmPasswordValue: '',
    confirmPasswordMsg: 'Field is required'
}, {
    title: 'Password matches',
    confirmPasswordValue: 'Abc456!@',
    confirmPasswordMsg: ''
}, {
    title: 'Different password',
    confirmPasswordValue: '123',
    confirmPasswordMsg: 'Passwords are not the same'
}
];
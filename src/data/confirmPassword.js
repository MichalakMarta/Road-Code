// The array of objects with input data
export const confirmPasswordParams = [{
    title: 'Field is empty',
    confirmPasswordValue: '',
    confirmPasswordMsg: 'Field is required'
}, {
    title: 'Password matches',
    passwordValue: 'Abc456!@',
    confirmPasswordValue: 'Abc456!@',
    confirmPasswordMsg: ''
}, {
    title: 'Different password',
    passwordValue: 'Abc456!@',
    confirmPasswordValue: '123',
    confirmPasswordMsg: 'Passwords are not the same'
}
];
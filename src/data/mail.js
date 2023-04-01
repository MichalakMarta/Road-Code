// An array of objects with input data
export const testsMail = [{
    title: 'Test creating an account without filling in the email field',
    emailValue: '',
    emailMsg: 'Field is required'
}, {
    title: 'Test creating an account when email is incorrect',
    emailValue: 'mail',
    emailMsg: 'Invalid email address'
}, {
    title: 'Test creating an account when email is correct',
    emailValue: 'mail@test.pl',
    emailMsg: ''
}];

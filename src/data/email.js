// The array of objects with input data
export const emailParams = [{
    title: 'Field is empty',
    emailValue: '',
    emailMsg: 'Field is required'
}, {
    title: 'Email has valid format',
    emailValue: 'mail@test.pl',
    emailMsg: ''
}, {
    title: 'Email without @',
    emailValue: 'mail.test.pl',
    emailMsg: 'Invalid email address'
}, {
    title: 'Email without domain',
    emailValue: 'mail@',
    emailMsg: 'Invalid email address'
}, {
    title: 'Email with incorrect domain',
    emailValue: 'mail@test',
    emailMsg: 'Invalid email address'
}, {
    title: 'Email without user name',
    emailValue: '@test.pl',
    emailMsg: 'Invalid email address'
}, {
    title: 'Email too long (above 60 characters)',
    emailValue: 'w4276hy38tzdynmzou4695t5djww1ttj8nquph6m7dvjb85h7481d@test.pl',
    emailMsg: 'Field must not contain more than 60 characters(s)'
}, {
    title: 'Email with max allowed characters length (60)',
    emailValue: 'w4276hy38tzdynmzou4695t5djww1ttj8nquph6m7dvjb85h7481@test.pl',
    emailMsg: ''
}];

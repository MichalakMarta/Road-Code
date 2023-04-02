// The array of objects with input data
const errorMsgPassword = "Password should be at least 8 characters long and contain at least one uppercase and one lowercase letter, one number and one special character";

export const passwordParams = [{
    title: 'Field is empty',
    passwordValue: '',
    passwordMsg: errorMsgPassword
}, {
    title: 'Password correct',
    passwordValue: 'Abc456!@',
    passwordMsg: ''
}, {
    title: 'Password too short (below 8 characters)',
    passwordValue: 'Abc456!',
    passwordMsg: errorMsgPassword
}, {
    title: 'Password without uppercase letter',
    passwordValue: 'abc456!@',
    passwordMsg: errorMsgPassword
}, {
    title: 'Password without lowercase letter',
    passwordValue: 'ABC456!@',
    passwordMsg: errorMsgPassword
}, {
    title: 'Password without number',
    passwordValue: 'ABCdef!@',
    passwordMsg: errorMsgPassword
}, {
    title: 'Password without special character',
    passwordValue: 'Abc45678',
    passwordMsg: errorMsgPassword
}, {
    title: 'Password too long (above 50 characters)',
    passwordValue: 'eq)9cxh!haR?$!9OfN4wXPDvbXweEze!&ByYNMjrGncC(7p31^w',
    passwordMsg: 'Field must not contain more than 50 characters(s)',
}, {
    title: 'Password with max allowed characters length (50)',
    passwordValue: 'eq)9cxh!haR?$!9OfN4wXPDvbXweEze!&ByYNMjrGncC(7p31^',
    passwordMsg: ''
}
]
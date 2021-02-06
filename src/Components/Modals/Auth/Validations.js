export const validatePassword = password => password.length >= 8 && /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/g.test(password) 

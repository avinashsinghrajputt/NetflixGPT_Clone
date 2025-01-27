export const checkValidate = (email, password,Name) => {

    const isEmailValid =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid =/b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(Name);

    if (!isNameValid) {
        return "Name is not valid";
    }
    if (!isEmailValid) {
        return "Email address is not valid";
    }
    if (!isPasswordValid) {
        return "Password is not valid";
    } 
    return null;
};
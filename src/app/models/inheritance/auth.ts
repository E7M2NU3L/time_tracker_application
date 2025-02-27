export interface ILoginUser {
    email : string;
    password : string;
}

export interface IRegisterUser {
    firstname : string;
    lastname : string;
    email : string;
    password : string;
}

export interface IResetPasswordUser {
    password : string;
    confirmPassword : string;
}

export interface IVerifyOtp {
    otp : string;
}

export interface ISendMail {
    email : string;
}

export interface IUpdateUser {
    firstname : string;
    lastname : string;
    Bio : string;
    phone : string;
    occupation : string;
    address : string;
}

export interface IDeleteUser {
    confirmation : string;
}

export interface IProfilePicture {
    profilePic : File;
}
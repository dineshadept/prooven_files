export const errMsgs = {
    login_failure_invalid_credentials : {
        code: 401,
        message: "Login Failed: Invalid Credentials"
    },
    login_failure_verification_incomplete : {
        code: 501,
        message: "Login Failed: Please complete email verification"
    },
    signup_success : {
        code: 501,
        message: "Please verify email to proceed with login"
    },
    signup_duplicate : {
        code: 501,
        message: "Email is already signed up. Verification email has been sent again to your email"
    },
    invalid_user : {
        code: 501,
        message: "Unknown userId"
    }
}
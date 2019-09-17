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
        message: "Email is already signed up"
    },
    invalid_user : {
        code: 501,
        message: "Unknown userId"
    },
    candidates_duplicate_update_fail : {
        code: 501,
        message: "Duplicate candidate error"
    },
    candidates_update_fail : {
        code: 200,
        message: "Failed to create candidates"
    },
    invalid_userId : {
        code: 501,
        message: "User not found"
    },
    email_verify_token_mismatch : {
        code: 501,
        message: "Invalid verification url"
    }
}

export const successMsgs = {
    candidates_update_success : {
        code: 200,
        message: "Created and uploaded candidates successfully"
    },
    signup_success: {
        code: 200,
        message: "SignUp Successful. Please verify your email to login!"
    },
    email_verify_success: {
        code: 200,
        message: "Email Verification Successful. Please proceed to login!"
    }
}
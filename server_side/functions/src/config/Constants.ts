export const errMsgs = {
    login_failure_invalid_credentials : {
        code: 401,
        message: "Login Failed: Invalid Credentials"
    },
    login_failure_verification_incomplete : {
        code: 401,
        message: "Login Failed: Please complete email verification"
    },
    signup_duplicate : {
        code: 401,
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
        code: 501,
        message: "Failed to create candidates"
    },
    email_verify_invalid_userId : {
        code: 401,
        message: "User not found"
    },
    email_verify_token_mismatch : {
        code: 401,
        message: "Invalid verification url"
    }
}

export const successMsgs = {
    login_success : {
        code: 200,
        message: "Login Successful!"
    },
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
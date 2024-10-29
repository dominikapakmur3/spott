export const common = {
    selector: {
        generic: {
            paragraph: 'p',
            header: 'h1',
            logo: '.logo-the-spott',
            subHeader: '.large-paragraph',
            label: '.ts-input__label',
            link: '.link',
            divider: '.regular-paragraph',
            validation: '.error-message',
            errorFeedback: '.invalid-feedback',
            checkbox: ".ts-checkbox",
            input: '.ts-input',
            outside: '#select-test',
            datepicker: '.calendar-icon',
        },
        createSessionPage: {
            clientsInput: '#clients tags',
            createSessionButton: '.ms-submit-button',
            sessionClientsList: '.ms-users-list',
            singleClient: '.tagify__dropdown__item ',
            startTimeDropdown: "#time-dropdown-time-start",
            actualTimeValue: ".selected-value",
        },
        loginPage: {
            googleLogo: '.logo',
            eyeButton: '#show-hide',
            reference: '.link',
            googleButton: '.ts-google-button',
            terms: ".terms-checkbox",
            disclaimer: ".auth-disclaimer",
        },
        landingPage: {
            userMenuToggle: '.ts-user-menu-toggle',
            userMenuList: '.ts-dropdown-menu',
            userMenuItem: '.ts-user-menu-item',
            createSession: ".ts-button-white",
            confirmationPopup: '.custom-swal-title',
            calendarSession: '.fc-event-title',
            sessionDetail: '.fc-event-info',
        },
        button: {
            auth: '.auth-button',
        },
        attribute: {
            name: {
                href: 'href',
            },
            value: {
            }
        },
        className: {
        },
    },
    input: {
        email: 'input[type="email"]',
        password: 'input[type="password"]',
    },
    class: {
        visible: /show/
    },
    text: {
        confirmationPopup: {
            success: 'Session created successfully',
            removed: 'Session cancelled successfully'
        },
        type: {
            liveRemote: "Live  Remote",
            liveInPerson: "Live  In-Person",
            prescribed: "Prescribed"
        },
        title: {
            inPerson: 'PW Test In Person Session',
            remote: 'PW Test Remote Session',
            prescribed: 'PW Test Prescribed Session'
        },

        sessionDetails: {
            label: {
                sessionType: "Session Type:",
                time: "Time:",
                singleParticipant: "Participant:",
                multiParticipants: "Participants:",
                activityType: "Activity Type:"
            },

            type: {
                inPerson: "Live: In-Person",
                remote: "Live: Remote",
                prescribed: ''
            }
        },
        activities: {
            basic: 'Basic'
        },
        createSession: 'Create Session',
        agreement: "I agree to The Spott's Licence Agreement and Privacy Policy",
        or: 'OR',
        disclaimer: "You won't be receiving an email from us if you haven't signed up with the same email address before",
        pageTitle: "The Spott",
        signIn: 'Sign In',
        signUp: 'Sign Up',
        signOut: 'Sign Out',
        subHeader: {
            existingAccount: 'Already have an account? Sign In',
            missingAccount: 'Don’t have an account? Sign Up',
            email: "Please provide the email associated with the account."
        },
        confirm: 'Confirm',
        delete: 'Delete',
        back: "Back to Sign In",
        sendCode: "Send Verification Code",
        resendCode: 'Resend the code',
        email: 'Email Address',
        emailReceive: "Didn't receive an email?",
        emailInvalid: 'Invalid email address?',
        password: 'Password',
        code: 'Confirmation Code',
        setPassword: "Set new password",
        newPassword: 'New password',
        forgot: 'Forgot password?',
        resetPassword: 'Reset password',
        googleSignIn: 'Sign In with Google',
        googleSignUp: 'Sign Up with Google',
        validation: {
            missingPassword: 'Password cannot be empty',
            missingLogin: 'Email cannot be empty',
            invalidCredentials: 'Oops! Invalid username or password. Please try again.',
            incompleteEmail: "Please make sure the email address is correct."
        }
    },
    url: {
        login: 'https://trainer.dev.the-spott.com/login',
        landing: 'https://trainer.dev.the-spott.com/sessions'
    },
    href: {
        login: '/login',
        register: '/register',
        forgot: '/forgot-password',
    }
};

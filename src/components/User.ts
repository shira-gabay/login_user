export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}

// הגדרת המצב ההתחלתי
export const initialUserState: User = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    phone: ""
};



export type IUser = {
    id?: number;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    avatar?: string;
    role?: string;
    fullName?: string;
    bio?: string;

    userSetting?: IUserSetting;
};

export type IUserSetting = {
    id?: number | string;
    facebookLink: string;
    githubLink: string;
    isEmailForNewCourse: boolean;
    isNotificationForNewCourse: boolean;
    isNotificationForReplyCmt: boolean;
    isNotificationForCmtOfYourBlog: boolean;
    isNotificationForPinInDiscuss: boolean;
};

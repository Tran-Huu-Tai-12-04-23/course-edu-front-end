export const path = {
    HOME: '/',
    POST: {
        INDEX: '/post',
        MANAGER_POST_USER: '/post/user/manager',
        CREATE: '/post/create',
        MANAGER: '/post/manager',
        VIEW: '/post/view',
        DETAIL: '/post',
    },
    COURSE: {
        SUMMARY: '/course/summary',
        LEARNING: '/course/learning',
    },
    ROAD_MAP: {
        INDEX: '/road-map',
    },
    AUTH: {
        LOGIN: '/login',
        REGISTER: '/register',
    },
    ADMIN: {
        MANAGER_COURSE_CATEGORY: '/admin/course/category',
        DASHBOARD: '/admin',
        COURSE: '/admin/course',
        POST: '/admin/post',
        USER: '/admin/user',
    },

    USER: {
        MANAGER_POST: '/user/post',
    },
} as const;

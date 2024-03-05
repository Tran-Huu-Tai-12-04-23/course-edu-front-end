export const path = {
    HOME: '/',
    POST: {
        INDEX: '/post',
        CREATE: '/post/create',
        MANAGER: '/post/manager',
        VIEW: '/post/view',
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
        DASHBOARD: '/admin',
        COURSE: '/admin/course',
        POST: '/admin/post',
        USER: '/admin/user',
    },
} as const;

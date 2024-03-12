import { ICourse } from './Course.model';

export type ICategoryCourse = {
    id?: string;
    categoryName: string;
};

export type IHomeResponse = {
    courseRes: ICourseResponse[];
    categoriesCourse: ICategoryCourse[];
    banners: IBanner[];
};

export type ICourseResponse = {
    categoryCourse: ICategoryCourse;
    courses: ICourse[];
};

export type IBanner = {
    id?: number;
    title: string;
    subtitle: string;
    thumbnails: string;
    btnTitle: string;
    actionLink: string;
    startColor: string;
    endColor: string;
};

export type IResponse<T, U> = {
    status: number;
    meta: T;
    data: U | null;
    message: string;
};

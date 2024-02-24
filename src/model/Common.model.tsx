import { ICourse } from './Course.model';

export type ITypeCourse = {
    id?: string;
    typeName: string;
};

export type IHomeResponse = {
    courseRes: ICourseResponse[];
    typeCourses: ITypeCourse[];
    banners: IBanner[];
};

export type ICourseResponse = {
    typeCourse: ITypeCourse;
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

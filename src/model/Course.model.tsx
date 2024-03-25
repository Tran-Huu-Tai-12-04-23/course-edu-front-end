import { ICategoryCourse } from './Common.model';

export type ICourse = {
    id?: number;
    title: string;
    description: string;
    subTitle: string;
    thumbnail: string;
    price: number;
    adviseVideo: string;
    typeCourse: string;
    categoryCourse: ICategoryCourse;
    status: IStatusCourse;
    items?: [];
};

export enum IStatusCourse {
    Published,
    UnPublished,
    ComingSoon,
}

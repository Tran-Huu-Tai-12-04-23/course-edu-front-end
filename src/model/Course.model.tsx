export type ICourse = {
    id?: number;
    title: string;
    description: string;
    subTitle: string;
    thumbnail: string;
    price: number;
    adviseVideo: string;
    typeCourse: string;
};

export enum IStatusCourse {
    COMING_SOON,
    PUBLISHED,
}

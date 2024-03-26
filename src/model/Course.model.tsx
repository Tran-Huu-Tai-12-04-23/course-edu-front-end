import { TypeItemPost } from '../components/FragmentBlogItem/FragmentBlogItem.type';
import { ICategoryCourse } from './Common.model';
import { IPostItem } from './Post.model';

export type ICourse = {
    id?: number;
    title: string;
    description: string;
    subTitle: string;
    thumbnail: string;
    price: number;
    adviseVideo: string;
    categoryCourse: ICategoryCourse;
    status: IStatusCourse;
    requireSkill: string;
    target: string;
    items?: [];
};

export type IGroupLesson = {
    id?: number | string;
    title: string;
    lessons: ILesson[];
    totalLesson: number;
    index: number;
};
export enum ITypeLesson {
    Quiz,
    Post,
    Video,
}
export type ILesson = {
    id?: number | string;
    type?: ITypeLesson | any;
    title: string;
    description?: string;
    quiz?: IQuestion[];
    video?: IVideoLesson;
    post?: IPostLesson;
};

export type IQuestion = {
    id?: string | number;
    question: string;
    answers: string[];
    correctAnswerIndex: number;
    explain?: string;
    imgURL?: string;
    index: number;
};

export type IVideoLesson = {
    id?: string | number;
    videoURL?: string;
    videoId?: string;
};
export type IPostLesson = {
    id?: string | number;
    items: TypeItemPost[];
};

export enum IStatusCourse {
    Published,
    UnPublished,
    ComingSoon,
}

import { TypeItemPost } from '../components/FragmentBlogItem/FragmentBlogItem.type';
import { IUser } from './User.model';

export type IPostItem = {
    id?: number | string;
    thumbnail: string;
    title: string;
    description: string;
    tags: string;
    items?: TypeItemPost[];
    status?: IStatusPost;
    isPin?: boolean;
    user?: IUser;
    isApproved?: boolean;
};
export type IPostRequest = {
    id?: number;
    userId?: number;
    thumbnail: string;
    title: string;
    description: string;
    tags: string;
    items: TypeItemPost[];
    status?: IStatusPost;
    isPin?: boolean;
};

export enum IStatusPost {
    Pending,
    Published,
    UnPublished,
}

import { TypeItemPost } from '../components/FragmentBlogItem/FragmentBlogItem.type';

export type IPostItem = {
    id?: number;
    thumbnail: string;
    title: string;
    description: string;
    tags: string;
    items: TypeItemPost[];
    status?: boolean;
    isPin?: boolean;
    state: IStatePost;
};

export enum IStatusPost {
    PENDING,
    PUBLISHED,
    UNPUBLISHED,
}

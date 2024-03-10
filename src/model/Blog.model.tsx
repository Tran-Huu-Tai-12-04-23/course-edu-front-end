import { TypeFragmentBlogItem } from '../components/FragmentBlogItem/FragmentBlogItem.type';

export type IPostItem = {
    id?: number;
    thumbnail: string;
    title: string;
    description: string;
    tags: string;
    items: TypeFragmentBlogItem[];
    status?: boolean;
    state: StatePost;
};

export enum StatePost {
    PENDING,
    PUBLISHED,
    UNPUBLISHED,
}

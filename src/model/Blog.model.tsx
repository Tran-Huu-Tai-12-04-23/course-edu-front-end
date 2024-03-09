import { TypeFragmentBlogItem } from '../components/FragmentBlogItem/FragmentBlogItem.type';

export type IBlogItem = {
    id?: number;
    thumbnail: string;
    title: string;
    description: string;
    tags: string;
    items: TypeFragmentBlogItem[];
    status?: boolean;
};

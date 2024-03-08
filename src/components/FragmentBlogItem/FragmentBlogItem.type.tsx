import { Input, Textarea } from '@nextui-org/react';
import FragmentImgFileItem from './FragmentImgFileItem';
import FragmentSelectCategoryItem from './FragmentSelectCategoryItem';
import ReactQuill from 'react-quill';
import { FaHeading } from 'react-icons/fa';
import { MdOutlineTextFields } from 'react-icons/md';
import { CiTextAlignLeft } from 'react-icons/ci';
import { FaRegImage } from 'react-icons/fa';
import { BiSolidCategory } from 'react-icons/bi';
import { FaYoutube, FaFacebook, FaInstagram, FaGithub, FaTiktok } from 'react-icons/fa';

export enum FragmentBlogItemType {
    HEADER,
    IMAGE,
    CATEGORY,
    TEXT_SIMPLE,
    TEXT_EDITOR,
    EMBED_YOUTUBE,
    EMBED_FACEBOOK,
    EMBED_TIKTOK,
    EMBED_INSTAGRAM,
    EMBED_GITHUB,
}

export const fragmentBlogItemLabel = [
    {
        key: FragmentBlogItemType.HEADER,
        label: 'Tiêu đề',
        icon: <FaHeading className="text-xl" />,
        component: <Input labelPlacement={'outside'} className="text-3xl" type="text" label="" />,
    },
    {
        key: FragmentBlogItemType.IMAGE,
        label: 'Hình ảnh',
        icon: <FaRegImage className="text-xl" />,
        component: <FragmentImgFileItem />,
    },
    {
        key: FragmentBlogItemType.CATEGORY,
        label: 'Danh mục',
        icon: <BiSolidCategory className="text-xl" />,
        component: <FragmentSelectCategoryItem />,
    },
    {
        key: FragmentBlogItemType.TEXT_SIMPLE,
        label: 'Văn bản đơn giản',
        icon: <MdOutlineTextFields className="text-xl" />,
        component: <Textarea labelPlacement={'outside'} className="w-full" />,
    },
    {
        key: FragmentBlogItemType.TEXT_EDITOR,
        label: 'Văn bản có biên tập',
        component: <ReactQuill className="rounded-lg w-full bg-[#f4f4f5] dark:bg-[#27272a]" theme="snow" />,
        icon: <CiTextAlignLeft className="text-xl" />,
    },
    {
        key: FragmentBlogItemType.EMBED_YOUTUBE,
        label: 'Video YouTube',
        component: <Input labelPlacement={'outside'} className="" type="text" placeholder="Dán đường dẫn vào đây" />,
        icon: <FaYoutube className="text-xl" />,
    },
    {
        key: FragmentBlogItemType.EMBED_FACEBOOK,
        label: 'Nhúng Facebook',
        component: <Input labelPlacement={'outside'} className="" type="text" placeholder="Dán đường dẫn vào đây" />,
        icon: <FaFacebook className="text-xl" />,
    },
    {
        key: FragmentBlogItemType.EMBED_TIKTOK,
        label: 'Nhúng TikTok',
        component: <Input labelPlacement={'outside'} className="" type="text" placeholder="Dán đường dẫn vào đây" />,
        icon: <FaTiktok className="text-xl" />,
    },
    {
        key: FragmentBlogItemType.EMBED_INSTAGRAM,
        label: 'Nhúng Instagram',
        icon: <FaInstagram className="text-xl" />,
        component: <Input labelPlacement={'outside'} className="" type="text" placeholder="Dán đường dẫn vào đây" />,
    },
    {
        key: FragmentBlogItemType.EMBED_GITHUB,
        label: 'Nhúng GitHub',
        icon: <FaGithub className="text-xl" />,
        component: <Input labelPlacement={'outside'} className="" type="text" placeholder="Dán đường dẫn vào đây" />,
    },
];
export interface IHeading {
    id: string;
    content: string;
    typeItem: FragmentBlogItemType;
}
export interface ICategory {
    id: string;
    category: string[];
    typeItem: FragmentBlogItemType;
}
export interface IText {
    id: string;
    content: string;
    typeItem: FragmentBlogItemType;
}
export interface ITextEditor {
    id: string;
    content: string;
    typeItem: FragmentBlogItemType;
}

export interface IYoutubeEmbed {
    id: string;
    link: string;
    typeItem: FragmentBlogItemType;
}

export interface IFacebookEmbed {
    id: string;
    link: string;
    typeItem: FragmentBlogItemType;
}

export interface IGithubEmbed {
    id: string;
    link: string;
    typeItem: FragmentBlogItemType;
}
export interface IInstagramEmbed {
    id: string;
    link: string;
    typeItem: FragmentBlogItemType;
}
export interface ITiktokEmbed {
    id: string;
    link: string;
    typeItem: FragmentBlogItemType;
}
export interface IImage {
    id: string;
    alt?: string;
    link?: string;
    urlImage?: string;
    typeItem: FragmentBlogItemType;
}

export type TypeFragmentBlogItem =
    | IHeading
    | IText
    | ITextEditor
    | IImage
    | IFacebookEmbed
    | IYoutubeEmbed
    | IInstagramEmbed
    | IGithubEmbed
    | ITiktokEmbed
    | ICategory;

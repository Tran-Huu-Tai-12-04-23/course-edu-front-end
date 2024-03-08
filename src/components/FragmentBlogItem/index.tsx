import { motion } from 'framer-motion';
import { FragmentBlogItemType, TypeFragmentBlogItem, fragmentBlogItemLabel } from './FragmentBlogItem.type';
import { BsArrowsMove } from 'react-icons/bs';
import { RiCloseCircleLine } from 'react-icons/ri';

type FragmentBlogItemProps = {
    type: FragmentBlogItemType;
    onRemove: (id: string) => void;
    data: TypeFragmentBlogItem;
};

const getLabel = (type: FragmentBlogItemType): string => {
    return fragmentBlogItemLabel.find((fra) => fra.key === type)?.label ?? '';
};

const getComponentItem = (type: FragmentBlogItemType): React.ReactNode => {
    return fragmentBlogItemLabel.find((fra) => fra.key === type)?.component;
};

function FragmentBlogItem(props: FragmentBlogItemProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                transform: 'translateY(200px)',
            }}
            animate={{
                opacity: 1,
                transform: 'translateY(0px)',
            }}
            transition={{
                duration: 0.5,
            }}
            className="flex w-full justify-between items-start gap-10"
        >
            <div className="flex flex-shrink-0 w-[86%] justify-start items-start">
                <h5 className="min-w-[13rem]">{getLabel(props.type)} : </h5>
                {getComponentItem(props.type)}
            </div>
            <div className="flex  justify-end items-center gap-5">
                <RiCloseCircleLine
                    className="text-xl hover:text-primary cursor-pointer"
                    onClick={() => {
                        props.onRemove(props.data.id);
                    }}
                />
                <BsArrowsMove className="text-xl cursor-move hover:text-blue-600" />
            </div>
        </motion.div>
    );
}

export default FragmentBlogItem;

import { motion } from 'framer-motion';
import FragmentBlogItem from '../../../components/FragmentBlogItem';
import {
    fragmentBlogItemLabel,
    TypeFragmentBlogItem,
} from '../../../components/FragmentBlogItem/FragmentBlogItem.type';
import { Button, ButtonGroup } from '@nextui-org/react';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { IoArrowUndo, IoArrowRedo } from 'react-icons/io5';

function Editor() {
    const [items, setItems] = useState<TypeFragmentBlogItem[]>([]);
    const [itemsNextVersion, setItemNextVersion] = useState<TypeFragmentBlogItem[][]>([]);
    const [itemsPrevVersion, setItemPrevVersion] = useState<TypeFragmentBlogItem[][]>([]);

    const handleUndo = () => {
        if (itemsPrevVersion.length === 0) {
            return; // No previous versions to undo
        }

        const undoItems = itemsPrevVersion.pop();

        if (!undoItems) return;
        setItemNextVersion((prevVer) => [...prevVer, items]);
        setItems([...undoItems.map((i) => ({ ...i }))]);
    };
    const handleRedo = () => {
        if (itemsNextVersion.length === 0) {
            return;
        }

        const undoItems = itemsNextVersion.pop();

        if (!undoItems) return;
        setItemPrevVersion((prevVer) => [...prevVer, items]);
        setItems([...undoItems.map((i) => ({ ...i }))]);
    };

    return (
        <motion.div
            className="w-full p-4 mb-10 flex flex-col gap-10"
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
        >
            {items.map((item) => (
                <FragmentBlogItem
                    key={item.id}
                    type={item.typeItem}
                    data={item}
                    onRemove={(id) => {
                        setItems((prev) => {
                            setItemNextVersion((prevVer) => [...prevVer, prev]);
                            return prev.filter((it) => it.id !== id);
                        });
                    }}
                />
            ))}

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
                className="flex justify-start items-start gap-10"
            >
                <span className="w-max flex-shrink-0">Thêm thành phần khác⚠️:</span>
                <div className="flex flex-wrap  gap-2 justify-start items-center">
                    {fragmentBlogItemLabel.map((label) => (
                        <div key={label.key} className="relative group">
                            <Button
                                startContent={label.icon}
                                variant="flat"
                                onClick={() => {
                                    setItems((prev) => {
                                        setItemPrevVersion((prevVer) => [...prevVer, prev]);
                                        return [
                                            ...prev,
                                            {
                                                id: uuidv4(),
                                                typeItem: label.key,
                                            },
                                        ];
                                    });
                                }}
                            />
                            <div className="hidden group-hover:block z-50 w-max absolute top-[100%] left-0 p-2 pl-4 pr-4 rounded-lg bg-[#e4e4e7] dark:bg-[#3f3f46]">
                                {label.label}
                            </div>
                        </div>
                    ))}
                    <div className="w-full flex justify-start items-center gap-4">
                        <ButtonGroup>
                            <Button variant="flat" onClick={handleUndo} isDisabled={itemsNextVersion.length > 0}>
                                <IoArrowUndo className="text-xl cursor-pointer hover:text-blue-700" />
                            </Button>
                            <Button variant="flat" onClick={handleRedo} isDisabled={itemsPrevVersion.length > 0}>
                                <IoArrowRedo className="text-xl cursor-pointer hover:text-blue-700" />
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </motion.div>

            {/* <ReactQuill className="rounded-lg h-[10rem]" theme="snow" value={value} onChange={setValue} /> */}
        </motion.div>
    );
}

export default Editor;

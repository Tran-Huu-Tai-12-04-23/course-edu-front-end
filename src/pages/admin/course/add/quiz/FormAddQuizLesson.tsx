import { Input, Button, Image, RadioGroup, Radio } from '@nextui-org/react';
import { BsFillImageFill } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import uploadImage from '../../../../../services/Firebase';
import { CgArrowsExchangeAlt } from 'react-icons/cg';
import ReactQuill from 'react-quill';
import { TypeLesson } from './AddQuizLesson';
import { Draggable } from '@hello-pangea/dnd';
import { FaTrash } from 'react-icons/fa';

type FormAddQuizLessonProps = {
    data: TypeLesson;
    index: number;
    onRemove: (id: any) => void;
    onAdd: (data: TypeLesson) => void;
};
function FormAddQuizLesson(props: FormAddQuizLessonProps) {
    const refImg = useRef<HTMLInputElement>(null);
    const [imgURL, setImgURL] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [content, setContent] = useState<string>('');
    const [answer1, setAnswer1] = useState<string>('');
    const [answer2, setAnswer2] = useState<string>('');
    const [answer3, setAnswer3] = useState<string>('');
    const [answer4, setAnswer4] = useState<string>('');
    const [correctIndexAnswer, setCorrectIndexAnswer] = useState<number>(-1);

    // Initialize state with props data when component mounts
    // useEffect(() => {
    //     const { imgURL, content, answers, correctIndexAnswer } = props.data;
    //     setImgURL(imgURL);
    //     setContent(content);
    //     setAnswer1(answers[0] || '');
    //     setAnswer2(answers[1] || '');
    //     setAnswer3(answers[2] || '');
    //     setAnswer4(answers[3] || '');
    //     setCorrectIndexAnswer(correctIndexAnswer);
    // }, [props.data]);

    const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;

        if (file) {
            setIsLoading(true);
            const imgu = await uploadImage(file);
            if (imgu) setImgURL(imgu.toString());
            setIsLoading(false);
        }
    };

    const handleAddNewQuiz = () => {
        // const dataQuiz = {
        //     imgURL,
        //     content,
        //     answers: [answer1, answer2, answer3, answer4],
        //     correctIndexAnswer,
        //     index: props.data.index,
        //     id: props.data.id,
        // };
        // props.onAdd(dataQuiz);
    };

    useEffect(() => {
        const dataQuiz = {
            imgURL,
            content,
            answers: [answer1, answer2, answer3, answer4],
            correctIndexAnswer,
            index: props.data.index,
            id: props.data.id,
        };

        props.onAdd(dataQuiz);
    }, [imgURL, content, answer1, answer2, answer3, answer4, correctIndexAnswer]);

    return (
        <Draggable key={props.data.id} draggableId={'quiz-' + props.data.id} index={props.index}>
            {(provided) => {
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="relative  group w-full flex-col flex gap-2 p-4 rounded-lg bg-white dark:bg-black"
                    >
                        <div className=" flex justify-between items-center mb-4 ">
                            <h1 className="font-bold">{props.index + 1}. Nhập câu hỏi</h1>
                            <Button
                                variant="flat"
                                color="danger"
                                onClick={() => {
                                    props.onRemove(props.data.id);
                                }}
                                isIconOnly
                                startContent={<FaTrash />}
                                className="absolute hidden group-hover:flex top-2 right-2"
                            />
                        </div>
                        <ReactQuill
                            value={content}
                            onChange={(val) => setContent(val)}
                            className="rounded-lg w-full bg-[#f4f4f5] dark:bg-[#27272a]"
                            theme="snow"
                        />

                        <div className="col-span-2">
                            <h1>Thêm hình ảnh</h1>
                            {!imgURL && (
                                <Button
                                    onClick={() => {
                                        if (refImg.current) {
                                            refImg.current.click();
                                        }
                                    }}
                                    isLoading={isLoading}
                                    isIconOnly
                                    startContent={<BsFillImageFill />}
                                />
                            )}
                            {imgURL && (
                                <div className="flex justify-start items-start gap-4">
                                    <Button
                                        onClick={() => {
                                            if (refImg.current) {
                                                refImg.current.click();
                                            }
                                        }}
                                        isLoading={isLoading}
                                        isIconOnly
                                        startContent={<CgArrowsExchangeAlt />}
                                    />
                                    <Image width={100} alt="" src={imgURL} />
                                </div>
                            )}
                            <input
                                accept="image/*"
                                type="file"
                                className="hidden"
                                ref={refImg}
                                onChange={handleOnChange}
                            />
                        </div>

                        <RadioGroup
                            defaultValue={correctIndexAnswer.toString()}
                            label=""
                            onChange={(e) => setCorrectIndexAnswer(+e.target.value)}
                        >
                            <div className="flex justify-between gap-4 mt-5 items-center">
                                <div className="flex justify-between items-center gap-2 w-full">
                                    <Radio value={'0'} />
                                    <Input
                                        value={answer1}
                                        onChange={(e) => setAnswer1(e.target.value)}
                                        placeholder="Nhập câu trả lời 1... "
                                        labelPlacement="outside"
                                    />
                                </div>
                                <div className="flex justify-between items-center gap-2 w-full">
                                    <Radio value={'1'} />
                                    <Input
                                        value={answer2}
                                        onChange={(e) => setAnswer2(e.target.value)}
                                        placeholder="Nhập câu trả lời 2 ... "
                                        labelPlacement="outside"
                                    />
                                </div>
                            </div>
                            <div className="flex mt-5  justify-between gap-4 items-center">
                                <div className="flex justify-between items-center gap-2 w-full">
                                    <Radio value={'2'} />
                                    <Input
                                        value={answer3}
                                        onChange={(e) => setAnswer3(e.target.value)}
                                        placeholder="Nhập câu trả lời 3 ... "
                                        labelPlacement="outside"
                                    />
                                </div>

                                <div className="flex justify-between items-center gap-2 w-full">
                                    <Radio value={'3'} />
                                    <Input
                                        value={answer4}
                                        onChange={(e) => setAnswer4(e.target.value)}
                                        placeholder="Nhập câu trả lời 4 "
                                        labelPlacement="outside"
                                    />
                                </div>
                            </div>
                        </RadioGroup>
                    </div>
                );
            }}
        </Draggable>
    );
}

export default FormAddQuizLesson;

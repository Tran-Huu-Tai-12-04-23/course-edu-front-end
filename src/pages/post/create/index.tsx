import { Button } from '@nextui-org/react';
import { Editor } from '@tinymce/tinymce-react';
import { useRef, useState } from 'react';
import EnterInformationPost from './EnterInformationPost';

enum EStep {
    ADD_TEX = 0,
    ADD_INFORMATION_POST = 1,
    COMMIT = 2,
}
function CreatePost() {
    const editorRef = useRef<any>(null);
    const [step, setStep] = useState<EStep>(EStep.ADD_TEX);
    const [activeNextStep, setActiveNextStep] = useState<boolean>(false);

    const apiKey = 'u19givup3s32uss2aouvvjegtlvmvujgs6803eyavmcf6dpn';

    const handleNextButtonClick = () => {
        if (editorRef.current) {
            const content = editorRef.current.getContent();
            console.log('Content:', content);
            setStep((prev) => (prev === EStep.ADD_TEX ? EStep.ADD_INFORMATION_POST : EStep.COMMIT));
        }
    };

    console.log(step);

    return (
        <div className="">
            {step === EStep.ADD_TEX && (
                <>
                    <Editor
                        onEditorChange={(content) => {
                            console.log('Content:', content);
                            setActiveNextStep(content.length > 16);
                        }}
                        apiKey={apiKey}
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        init={{
                            height: `calc(${window.innerHeight + 'px'} - 13rem) `,
                            plugins:
                                'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                            toolbar:
                                'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                        }}
                    />
                    <div className="w-full flex justify-end items-center mt-5 pr-10">
                        {!activeNextStep && (
                            <h5 className="text-red-600 text-md pr-5 mt-5">Nhập tối thiểu 10 ký tự....</h5>
                        )}
                        <Button isDisabled={!activeNextStep} color="primary" onClick={handleNextButtonClick}>
                            Tiếp theo
                        </Button>
                    </div>
                </>
            )}
            {step === EStep.ADD_INFORMATION_POST && <EnterInformationPost />}
        </div>
    );
}

export default CreatePost;

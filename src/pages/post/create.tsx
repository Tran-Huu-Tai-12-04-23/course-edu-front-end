import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';

function CreatePost() {
    const editorRef = useRef<any>(null);

    const apiKey = 'u19givup3s32uss2aouvvjegtlvmvujgs6803eyavmcf6dpn';
    return (
        <div className="">
            <Editor
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
        </div>
    );
}

export default CreatePost;

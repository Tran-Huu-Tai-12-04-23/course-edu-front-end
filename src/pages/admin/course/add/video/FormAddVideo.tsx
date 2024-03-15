import { Button, Input, Tab, Tabs } from '@nextui-org/react';
import { IoIosSave } from 'react-icons/io';
import { FaYoutube } from 'react-icons/fa';
import { RiVideoUploadFill } from 'react-icons/ri';
import { IoMdLink } from 'react-icons/io';
import { IoVideocam } from 'react-icons/io5';

function FormAddVideo() {
    return (
        <div className="">
            <Tabs aria-label="Options" variant="bordered">
                <Tab
                    key="embedYoutube"
                    title={
                        <div className="flex items-center space-x-2">
                            <FaYoutube />
                            <span>Nhúng video youtube</span>
                        </div>
                    }
                >
                    <Input
                        startContent={<IoMdLink />}
                        className="p-4"
                        label="Nhập link video youtube..."
                        labelPlacement="outside"
                        placeholder="ex: https://www.youtube.com/embed/5z5_fMQn4Tc?si=2t1t2RIvXFasBSfE"
                    />

                    <h1 className="p-4">Xem trước</h1>
                </Tab>
                <Tab
                    key="uploadVideo"
                    title={
                        <div className="flex items-center space-x-2">
                            <RiVideoUploadFill />
                            <span>Tải lên video</span>
                        </div>
                    }
                >
                    <Button startContent={<IoVideocam />}>Tải lên video</Button>

                    <h1 className="p-4">Xem trước</h1>
                </Tab>
            </Tabs>
            <div className="flex justify-center gap-4 mt-10 items-center right-1/2 z-50 translate-x-1/2 mb-20 fixed -bottom-16 shadow-2xl">
                <Button onClick={() => {}} startContent={<IoIosSave />} color="success" className="text-white">
                    Lưu lại
                </Button>
            </div>
        </div>
    );
}

export default FormAddVideo;

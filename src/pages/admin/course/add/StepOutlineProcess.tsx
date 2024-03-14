import { EStep } from './index';
import { MdAssignmentAdd } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';
import { GiConfirmed } from 'react-icons/gi';

type StepOutlineProcessProp = {
    step: EStep;
};
const Steps = [
    {
        title: 'Thêm thông tin tóm tắt',
        value: 0,
        icon: <MdAssignmentAdd className="text-xl text-[white] " />,
    },
    {
        title: 'Thêm chi tiết bài học',
        value: 1,
        icon: <TbListDetails className="text-xl text-[white]" />,
    },
    {
        title: 'Xác nhân và khởi tạo',
        value: 2,
        icon: <GiConfirmed className="text-xl text-[white]" />,
    },
];
function StepOutlineProcess(props: StepOutlineProcessProp) {
    return (
        <ol className="flex w-full items-center">
            {Steps.map((stepItem, index) => (
                <li
                    key={stepItem.value}
                    className={`${index === Steps.length - 1 ? 'w-0 ' : 'w-1/3 after:border-4'} cursor-pointer ${
                        stepItem.value === props.step || stepItem.value == EStep.ADD_SUMMARY_INFORMATION
                            ? 'after:border-primary '
                            : 'after:border-second '
                    } flex items-center  after:content-[''] after:w-full after:h-1 after:border-b  after:inline-block`}
                >
                    <span
                        className={`${
                            stepItem.value === props.step || stepItem.value == EStep.ADD_SUMMARY_INFORMATION
                                ? 'bg-primary'
                                : ' bg-dark-sidebar '
                        } flex items-center justify-center w-10 h-10  rounded-full lg:h-12 lg:w-12 shrink-0`}
                    >
                        {stepItem.icon}
                    </span>
                </li>
            ))}
        </ol>
    );
}

export default StepOutlineProcess;

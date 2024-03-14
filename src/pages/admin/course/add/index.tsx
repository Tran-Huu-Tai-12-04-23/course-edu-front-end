import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';
import { path } from '../../../../enum/path';
import AdminLayout from '../../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import StepOutlineProcess from './StepOutlineProcess';
import AddSummaryInformation from './AddSummaryInformation';
import AddDetailInformation from './AddDetailInformation';

export enum EStep {
    ADD_SUMMARY_INFORMATION,
    ADD_DETAIL_GROUP_LESSON,
    CONFIRM,
}
function AddCourse() {
    const history = useNavigate();
    const [step, setStep] = useState<EStep>(EStep.ADD_DETAIL_GROUP_LESSON);
    return (
        <AdminLayout>
            <div className="w-full  p-4">
                <Breadcrumbs>
                    <BreadcrumbItem onClick={() => history(path.ADMIN.COURSE)}>Quản trị</BreadcrumbItem>
                    <BreadcrumbItem>Quản lý</BreadcrumbItem>
                    <BreadcrumbItem>Thêm khóa học</BreadcrumbItem>
                </Breadcrumbs>
                <div className="pt-5 ">
                    <StepOutlineProcess step={step} />
                    <div className="w-full rounded-lg p-6 h-full bg-light-sidebar dark:bg-dark-sidebar mt-10">
                        {step === EStep.ADD_SUMMARY_INFORMATION && (
                            <AddSummaryInformation onNextStep={() => setStep(EStep.ADD_DETAIL_GROUP_LESSON)} />
                        )}
                        {step === EStep.ADD_DETAIL_GROUP_LESSON && <AddDetailInformation />}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default AddCourse;

// import VideoLearning from '../../../components/learning/VideoLearning';
import OutlineLearning from '../../../components/learning/OutlineLearning';
import QuizLearning from '../../../components/learning/QuizLearning';

function Learning() {
    return (
        <div className="pt-header pb-footer flex justify-between w-screen overflow-hidden">
            <QuizLearning />
            {/* <VideoLearning /> */}
            <OutlineLearning />
        </div>
    );
}

export default Learning;

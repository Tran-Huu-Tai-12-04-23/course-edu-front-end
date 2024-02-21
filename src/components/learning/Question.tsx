import { IQuestion } from '../../model/Question.model';

type QuestionProps = {
    data: IQuestion;
    index: number;
};
function Question(props: QuestionProps) {
    return (
        <div className="p-10 rounded-lg dark:bg-white/5 bg-black/5">
            <h5 className="text-xl font-bold mb-10">
                {props.index}. {props.data.question.charAt(0).toUpperCase() + props.data.question.substring(1)} ?
            </h5>
            <div className="grid grid-cols-2 gap-4 ">
                {props.data.answers.map((an, index) => (
                    <div
                        className="p-4 cursor-pointer rounded-lg dark:hover:bg-green-600 hover:bg-green-600 bg-black/5 dark:bg-white/5"
                        key={index}
                    >
                        {an}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Question;

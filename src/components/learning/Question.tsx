import { IQuestion } from '../../model/Question.model';
import RenderHTMLContent from '../RenderHtmlContent';

type QuestionProps = {
   data: IQuestion;
   index: number;
};
function Question(props: QuestionProps) {
   return (
      <div className="p-10 rounded-lg dark:bg-white/5 bg-black/5">
         <div className="mb-5 font-bold text-xl">
            <RenderHTMLContent htmlContent={props.data?.content}></RenderHTMLContent>
         </div>
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

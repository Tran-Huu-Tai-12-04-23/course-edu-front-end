import Question from './Question';
import { Button } from '@nextui-org/react';
import { MdSend } from 'react-icons/md';
import PartyMode from '../PartyMode';
import { useEffect, useState } from 'react';
import { ILesson } from '../../model/Course.model';

type QuizLearningProps = {
   data: ILesson;
};
function QuizLearning(props: QuizLearningProps) {
   const [party, setParty] = useState<boolean>(false);
   useEffect(() => {
      if (party) {
         const handleStopParty = setInterval(() => {
            setParty(false);
         }, 4000);
         return () => {
            clearInterval(handleStopParty);
         };
      }
   }, [party]);
   return (
      <div
         style={{
            height: 'calc(100vh - 10rem)',
         }}
         className="select-none scroll-custom overflow-auto w-full ml-28 mr-28 pt-10 pb-28"
      >
         {party && <PartyMode />}
         <h5 className="text-3xl text-center font-extrabold mb-5">{props.data.title}</h5>

         <div className="flex flex-col gap-4">
            {props.data.quiz &&
               props.data.quiz.map((ques, index) => <Question data={ques} key={index} index={index} />)}
         </div>

         <div className="w-full flex justify-center items-center mt-10">
            <Button
               onClick={() => setParty(true)}
               startContent={<MdSend className="text-xl text-white" />}
               color="success"
               className="text-white"
            >
               Gửi kết quả
            </Button>
         </div>
      </div>
   );
}

export default QuizLearning;

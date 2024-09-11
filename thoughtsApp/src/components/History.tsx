import { useForm } from "../context/FormContext";
import HistoryCard from "./alts/HistoryCard";

export default function History() {
  const { submittedForms } = useForm();
  console.log(submittedForms)
  return (
    <div className="w-2/4 h-full flex flex-col items-center gap-6 mt-36">
      {submittedForms.map((form, index) => (
        <HistoryCard form={form} key={index}/>
      ))} 
    </div>
  )
}

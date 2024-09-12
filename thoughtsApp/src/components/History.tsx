import { useForm } from "../context/FormContext";
import HistoryCard from "./alts/HistoryCard";

export default function History() {
  const { submittedForms, setSubmittedForms} = useForm();

  const handleRemove = (index: number) => {
    setSubmittedForms(prevForms => prevForms.filter((_, i) => i !== index));
    localStorage.removeItem('form');
  }

  return (
    <div className="w-9/12 sticky top-0 p-6 scroll-smooth">
      {submittedForms.length > 0 && submittedForms.map((form, index) => (
        <div key={index} className="w-full mt-24 ml-48 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <p>{form.date}</p>
            <button onClick={() => handleRemove(index)} className="ml-2">x</button>
          </div>

          <HistoryCard form={form} />
        </div>
      ))}
    </div>
  );
}

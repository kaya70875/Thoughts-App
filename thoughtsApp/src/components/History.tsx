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
      {submittedForms.length > 0 ? (submittedForms.map((form, index) => (
        <div key={index} className="w-full mt-20 ml-48 2xl:ml-40 xl:ml-36 l:ml-32 md:ml-24 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <p>{form.date}</p>
            <button onClick={() => handleRemove(index)} className="ml-2">x</button>
          </div>

          <HistoryCard form={form} />
        </div>
      ))) : (
        <div className="flex flex-col justify-center items-center h-screen ml-48 gap-6">
          <h1 className="font-bold text-textColor text-lg">No History Yet</h1>
          <p className="text-center text-base">Record your thoughts and mood for reflection. Everything is stored locally in your browser. Export data when you need it.</p>
        </div>
      )}
    </div>
  );
}

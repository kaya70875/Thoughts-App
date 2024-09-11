import { useForm } from "../context/FormContext";
import HistoryCard from "./alts/HistoryCard";

export default function History() {
  const { submittedForms, setSubmittedForms } = useForm();

  const handleRemove = (index: number) => {
    setSubmittedForms(prevForms => prevForms.filter((_, i) => i !== index));
  }

  return (
    <div>
      {submittedForms.length > 0 && submittedForms.map((form, index) => (
        <div key={index} className="w-full mt-24 ml-48 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <p className="text-textColor">
              {new Date().toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
              })}
            </p>
            <button onClick={() => handleRemove(index)} className="ml-2 text-red-500">x</button>
          </div>

          <HistoryCard form={form} />
        </div>
      ))}
    </div>
  );
}

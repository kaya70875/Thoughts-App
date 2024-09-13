// FormContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
interface FormState {
  emote: string;
  text?: string;
  tags?: string[];
  actions?: string[];
  date : string;
}

interface FormContextType {
  form: FormState;
  setForm: (newFormState: Partial<FormState>) => void;
  submittedForms: FormState[];
  setSubmittedForms: React.Dispatch<React.SetStateAction<FormState[]>>;
  isSubmitted: boolean;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

function initializeStorage() : FormState[] {
  const formObject = localStorage.getItem('form');
  return formObject ? JSON.parse(formObject) : [];
}

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [form, setFormState] = useState<FormState>({'emote': '' , 'date' : ''});
  const [submittedForms , setSubmittedForms] = useState<FormState[]>(initializeStorage);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const setForm = (newFormState: Partial<FormState>) => {
    setFormState(prevState => ({ ...prevState, ...newFormState }));
  };

  return (
    <FormContext.Provider value={{ form, setForm , submittedForms , setSubmittedForms , isSubmitted, setIsSubmitted}}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};

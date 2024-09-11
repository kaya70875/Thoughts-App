// FormContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface FormState {
  emote: string;
  text?: string;
  tags?: string[];
  actions?: string[];
}

interface FormContextType {
  form: FormState;
  setForm: (newFormState: Partial<FormState>) => void;
  submittedForms: FormState[];
  setSubmittedForms: React.Dispatch<React.SetStateAction<FormState[]>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [form, setFormState] = useState<FormState>({'emote': ''});
  const [submittedForms , setSubmittedForms] = useState<FormState[]>([]);

  const setForm = (newFormState: Partial<FormState>) => {
    setFormState(prevState => ({ ...prevState, ...newFormState }));
  };

  return (
    <FormContext.Provider value={{ form, setForm , submittedForms , setSubmittedForms}}>
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

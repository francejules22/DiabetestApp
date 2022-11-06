import { useState, createContext } from 'react';


const FormContext = createContext();

export const FormProvider = ({children}) => {
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [polyuria, setPolyuria] = useState("");
    const [polydipsia, setPolydipsia] = useState("");
    const [weight, setWeight] = useState("");
    const [weakness, setWeakness] = useState("");
    const [polyphagia, setPolyphagia] = useState("");
    const [genital, setGenital] = useState("");
    const [visual, setVisual] = useState("");
    const [itching, setItching] = useState("");
    const [irritability, setIrritability] = useState("");
    const [healing, setHealing] = useState("");
    const [paresis, setParesis] = useState('');
    const [stiffness, setStiffness] = useState("");
    const [alopecia, setAlopecia] = useState("");
    const [obesity, setObesity] = useState("");

    return(
        <FormContext.Provider 
            value={{age, gender, polyuria, polydipsia, weight, weakness,polyphagia, genital,
                 visual, itching, irritability, healing, paresis, stiffness, alopecia, obesity,
                 setAge, setGender, setPolyuria, setPolydipsia, setWeight, setWeakness, setPolyphagia, setGenital,
                 setVisual, setItching, setIrritability, setHealing, setParesis, setStiffness, setAlopecia, setObesity}}
        >{children}</FormContext.Provider>
    );
};

export default FormContext;
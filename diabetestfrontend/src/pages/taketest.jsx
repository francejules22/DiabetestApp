import React from 'react';
import InputTest from '../components/TakeTest/inputTest';
import { FormProvider } from '../components/FormContext/formContext';

const TestPage = () => {
    return(
      <>
      <FormProvider>
           <InputTest />
      </FormProvider>
      </>
    );
};
export default TestPage;
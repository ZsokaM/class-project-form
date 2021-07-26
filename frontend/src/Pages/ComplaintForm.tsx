import React, { useState, useEffect } from "react";
import { AxiosReportersApi, AxiosComplaintApi } from "../utils/AxiosApis";
import Fieldset from "../components/Form/Fieldset";
import FormHeader from "../components/Form/FormHeader";
import Button from "../components/Button";
import Dropdown from "../components/Form/Dropdown";
import PrioritySetting from "../components/Form/PrioritySetting";
import TextArea from "../components/Form/TextArea";
import Toast from "../components/Form/Toast";

const Form = () => {
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [reporters, setReporters] = useState<[]>([]);
  const [priority, setPriority] = useState([0, 1, 2]);
  const [addCopyfield, setAddCopyfield] = useState<number>(0);
  const [form, setForm] = useState({});
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    async function fetchReporters() {
      const result = await AxiosReportersApi("users");
      setReporters(result.data);
    }
    fetchReporters();
  }, []);

  const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsSaving((prevState) => !prevState);
      await AxiosComplaintApi.post("complaints", { form });
      setIsSaving((prevState) => !prevState);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(null);
      }, 2000);
    } catch (err) {
      setIsSuccess(false);
      setTimeout(() => {
        setIsSuccess(null);
      }, 2000);
      console.log(err);
    }
  };

  const onHandleCopyfield = () => {
    if (addCopyfield <= 5) {
      setAddCopyfield((prevState) => prevState + 1);
    }
  };

  const onHandleFormElement = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>Don't hold back</h1>
      <form onSubmit={onSubmitForm}>
        <Fieldset>
          <FormHeader
            onHandleFormElement={onHandleFormElement}
            addCopyfield={addCopyfield}
            onHandleCopyField={onHandleCopyfield}
          />
          <Dropdown
            users={reporters}
            onHandleFormElement={onHandleFormElement}
          />
          <PrioritySetting
            priority={priority}
            onHandleFormElement={onHandleFormElement}
          ></PrioritySetting>
          <TextArea
            name="description"
            onChange={onHandleFormElement}
          ></TextArea>
        </Fieldset>
        <Button
          type="submit"
          btnType="primary"
          disabled={isSaving}
        >
          Submit
        </Button>
      </form>
      {isSuccess && (
        <Toast type="success" isActive={isSuccess}>
          Submission complete
        </Toast>
      )}
      {isSuccess === false && (
        <Toast type="error" isActive={isSuccess}>
          Submission failed
        </Toast>
      )}
    </>
  );
};

export default Form;

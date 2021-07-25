import React, { FC } from "react";
import FormInput from "./FormInput";
import Button from "../Button";

interface IformHeader {
  onHandleFormElement: React.ChangeEventHandler<HTMLInputElement>;
  addCopyfield: number;
  onHandleCopyField: () => void;
}

const FormHeader: FC<IformHeader> = ({
  onHandleFormElement,
  addCopyfield,
  onHandleCopyField,
}) => {
  return (
    <>
      <FormInput
        label="Title"
        required="required"
        name="title"
        placeholder="add title"
        onHandleFormElement={onHandleFormElement}
      />
      <FormInput
        name="caseId"
        label="Case ID"
        placeholder="Case-id of customer"
        onHandleFormElement={onHandleFormElement}
      />
      <FormInput
        name="copyField"
        type="email"
        label="Who should be ccd?"
        placeholder="Send copy to"
        onHandleFormElement={onHandleFormElement}
      />

      {addCopyfield > 0 && (
        <section>
          {[...Array({ addCopyfield })].map((_, index) => (
            <FormInput
              key={index}
              name={`copy-${index}`}
              type="email"
              placeholder="Send copy to"
              onHandleFormElement={onHandleFormElement}
            />
          ))}
        </section>
      )}

      <Button
        type="button"
        btnType="simple"
        onClick={() => {
          onHandleCopyField();
        }}
      >
        Add cc field
      </Button>
    </>
  );
};

export default FormHeader;

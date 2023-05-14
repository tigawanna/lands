import { HTMLInputTypeAttribute } from "react";

export interface IFormInputs {
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  label: string;
  optional?: boolean;
}

interface FormInputsProps<T> extends React.InputHTMLAttributes<HTMLInputElement> {
  inputs: IFormInputs[];
  values: T;

}

export function TheFormInputs<T>({inputs,values,...props}: FormInputsProps<T>) {

if (inputs.length < 1) return null;
return (
    <div>
      {inputs.map((inpt) => {
        return (
          <div
            key={inpt.id}
            className="flex flex-col gap-1">
            <label className="" htmlFor={inpt.id}>
              {inpt.label}
            </label>
            <input
              id={inpt.id}
              // @ts-ignore
              value={values[inpt.id]}
              required={!inpt.optional}
              placeholder={inpt.placeholder}
              className="p-2 w-full rounded-lg active:border-purple-500 active:border"
              type={inpt.type}
              autoCapitalize="none"
              autoCorrect="off"
              onChange={props.onChange}
            />
          </div>
        );
      })}
    </div>
  );
}

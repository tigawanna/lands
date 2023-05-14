import { GroupBase, OptionProps, components } from "react-select";
import AsyncSelect from "react-select/async";

interface SearchOwnerProps<T> {
  gettterFunction(keyword: string): Promise<any[]>;
  setValue: (value: any) => void;

  CustomOption?: (
    props: OptionProps<T, boolean, GroupBase<T>>
  ) => JSX.Element | null;
}

export const SearchSelect = <T,>({ gettterFunction,setValue,CustomOption,}: SearchOwnerProps<T>) => {

  
  const loadOptions = (
    inputValue: string,
    callback: (options: any[]) => void
  ) => {
    setTimeout(async () => {
      callback(await gettterFunction(inputValue ?? " "));
    }, 200);
  };

  return (
    <AsyncSelect
      className="w-full"
      // @ts-expect-error
      onChange={(res) => {setValue(res.value);
      }}
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      components={CustomOption ? { Option: CustomOption } : undefined}
    />
  );
};

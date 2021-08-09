import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";
import { IGlobalReport } from "../../interface";

interface props {
  value?: string;
  handleOnChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  countries?: IGlobalReport[];
}
const CountrySelector: React.FC<props> = ({
  value,
  handleOnChange,
  countries,
}: props) => {
  return (
    <FormControl>
      <InputLabel htmlFor="" shrink>
        Quốc gia{" "}
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {countries?.map((country, index) => {
          return (
            <option key={index} value={country?.country}>
              {country?.country}
            </option>
          );
        })}
      </NativeSelect>
      <FormHelperText>Lựa chọn 1 quốc gia</FormHelperText>
    </FormControl>
  );
};

export default CountrySelector;

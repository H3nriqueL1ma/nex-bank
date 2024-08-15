import {Controller} from "react-hook-form";
import {IMaskInput} from "react-imask";

export default function InputCustomController({ name, control, id, mask, placeholder, type }) {
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <IMaskInput
                        id={id}
                        type={type}
                        mask={mask}
                        placeholder={placeholder}
                        required
                        {...field}
                    />
                )}
            />
        </>
    );
}
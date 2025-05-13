import clsx from "clsx";
import { Typography } from "../typography/typography";

interface Props {
    isLoading: boolean;
    placeholder: string;
    type?: "text" | "email" | "password";
    register: any;
    errors: any;
    errorMessage?: string;
    id: string;
    required?: boolean;
    isAutoCompleted?: boolean;
    label?: string;
}

export const Input = ({
    isLoading = false,
    placeholder,
    type = "text",
    register,
    errors,
    errorMessage = "Tu dois renseigner ce champ ",
    id,
    required = true,
    isAutoCompleted = false,
    label,
}: Props) => {
    return (
        <div className="space-y-2">
            {
                label && (
                    <Typography
                        variant="caption3"
                        component="div"
                        theme={errors[id] ? "danger" : "gray-600"}
                    >
                        {label}
                    </Typography>
                )
            }
            <input
                type={type}
                placeholder={placeholder}
                className={clsx(
                    isLoading && "cursor-not-allowed",
                    errors[id] ? "placeholder-alert-danger text-alert-danger" : "placeholder-gray-700",
                    "w-full p-4 font-light border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary text-gray-800")}
                disabled={isLoading}
                {...register(id, {
                    required: {
                        value: required,
                        message: errorMessage
                    }
                })}
                autoComplete={isAutoCompleted ? "on" : "off"}
            />
            {
                errors[id] && <Typography variant="caption4" component="div" theme="danger">
                    {errors[id]?.message}
                </Typography>
            }
        </div>
    );
}
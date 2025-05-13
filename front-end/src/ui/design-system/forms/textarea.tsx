import clsx from "clsx";
import { Typography } from "../typography/typography";

interface Props {
    isLoading: boolean;
    placeholder: string;
    rows?: number;
    cols?: number;
    register: any;
    errors: any;
    errorMessage?: string;
    id: string;
    required?: boolean;
    isAutoCompleted?: boolean;
    label?: string;
}

export const Textarea = ({
    isLoading,
    placeholder,
    rows = 5,
    cols,
    register,
    errors,
    errorMessage = "Tu dois renseigner ce champ",
    id,
    required,
    isAutoCompleted,
    label,
}: Props) => {
    return (
        <div>
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
            <textarea rows={rows} cols={cols} placeholder={placeholder} className={clsx(
                isLoading ? "bg-gray-300 focus:ring-gray-300 cursor-not-allowed" : "bg-white",
                errors[id] ? "placeholder-alert-danger text-alert-danger" : "placeholder-gray-600",
                "w-full p-4 font-light border-2 border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary"
            )}
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
import { formType } from "@/types/form";
import { Input } from "@/ui/design-system/forms/input";
import { Textarea } from "@/ui/design-system/forms/textarea";

interface Props {
    form: formType;
}

export const ProfileStepForm = ({ form }: Props) => {

    const { register, errors, isLoading } = form;

    return (
        <form className="w-full max-w-md space-y-4">
            <Input
                label="Nom d'utilisateur"
                isLoading={isLoading}
                placeholder="John Doe"
                type="text"
                register={register}
                errors={errors}
                errorMessage="Tu dois renseigner un pseudo"
                id="displayName"
            />
            <Input
                label="Expertise"
                isLoading={isLoading}
                placeholder="Developpeur front-end react freelance"
                type="text"
                register={register}
                errors={errors}
                errorMessage="Tu dois renseigner ton expertise"
                id="expertise"
            />
            <Textarea
                label="Biographie"
                isLoading={isLoading}
                placeholder="Indique une courte description de toi-meme et de ton parcours..."
                rows={5}
                register={register}
                errors={errors}
                errorMessage="Tu dois renseigner ce champ"
                id="biography"
                required={false}
            />
        </form>
    );
};
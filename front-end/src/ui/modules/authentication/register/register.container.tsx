import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { RegisterFormFieldsType } from "@/types/form";
import { firebaseCreateUser, sendEmailVerificationProcedure } from "@/api/authentication";
import { toast } from "react-toastify";
import { useToggle } from "@/hooks/use-toggle";
import { firestoreCreateDocument } from "@/api/firestore";

export const RegisterContainer = () => {

    // const { value: isLoading, setValue: setIsLoading, toggle } = useToggle();
    const { value: isLoading, setValue: setIsLoading } = useToggle();

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset
    } = useForm<RegisterFormFieldsType>();

    const handleCreateUserDocument = async (collectionName: string, documentID: string, document: object) => {
        const { error } = await firestoreCreateDocument(collectionName, documentID, document);
        if(error) {
            toast.error(error.message);
            setIsLoading(false);
            return;
        }
        toast.success("Bienvenue sur l'app des signes codeurs");
        setIsLoading(false);
        reset();
        sendEmailVerificationProcedure();
    }

    const handleCreateUserAuthentication = async ({ email, password, how_did_hear }: RegisterFormFieldsType) => {
        const { error, data } = await firebaseCreateUser(email, password);
        if (error) {
            setIsLoading(false);
            toast.error(error.message);
            return;
        }
        const userDocumentData = {
            email: email,
            how_did_hear: how_did_hear,
            uid: data.uid,
            creation_date: new Date(),
        };

        handleCreateUserDocument("users", data.uid, userDocumentData);
    }

    const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
        setIsLoading(true);
        console.log(formData);

        const { password } = formData;

        if (password.length <= 5) {
            setError("password", {
                type: "manual",
                message: "Ton mot de passe doit comporter au minimun 6 caractères",
            });
            setIsLoading(false);
            return;
        }

        handleCreateUserAuthentication(formData);
    }


    return (
        <RegisterView
            form={{
                errors,
                register,
                handleSubmit,
                onSubmit,
                isLoading,
            }}
        />
    );
}
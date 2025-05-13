import { firebaseLogoutUser } from "@/api/authentication";
import { Box } from "@/ui/design-system/box/box";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { toast } from "react-toastify";
import { ActiveLink } from "./active-link";

export const UserAccountNavigation = () => {
    const handleLgoutUser = async () => {
        const { error } = await firebaseLogoutUser();
        if (error) {
            toast.error(error.message);
            return;
        }
        toast.success("A bientot sur coders monkeys");

    }

    return (
        <Box className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
                <Typography variant="caption2" weight="medium">
                    <ActiveLink href="/mon-espace">Mon compte</ActiveLink>
                </Typography>
                <Typography variant="caption2" weight="medium">
                    <ActiveLink href="/mes-projets">Mes projets</ActiveLink>
                </Typography>
            </div>
            <Button action={handleLgoutUser} variant="danger">Déconnexion</Button>
        </Box>
    );
}
import { Spinner } from "./spinner";

export const ScreenSpinner = () => {
    return (
        <div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen">
            <Spinner size="large"/>
        </div>
    );
}
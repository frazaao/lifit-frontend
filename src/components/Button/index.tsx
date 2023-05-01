import useController from "./useController";

export default function Button() {

    const {} = useController();

    return (
        <>
            <h1 data-testid="Button">Button</h1>
        </>
    );
}


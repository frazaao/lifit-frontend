import BottomMenuItem from "../BottomMenuItem";
import useController from "./useController";

export default function BottomMenu() {
    const {} = useController();

    return (
        <>
            <nav data-testid="BottomMenu">
                <ul>
                    <BottomMenuItem title="Agenda" />
                    <BottomMenuItem title="Registros" />
                    <BottomMenuItem title="Início" />
                    <BottomMenuItem title="Cardápios" />
                    <BottomMenuItem title="Mensagens" />
                </ul>
            </nav>
        </>
    );
}

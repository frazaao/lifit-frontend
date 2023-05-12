import useController from "./useController";

interface BottomMenuItemProps {
    icon?: React.ReactNode;
    title?: string;
    href?: string;
}

export default function BottomMenuItem({
    icon = null,
    title = "",
    href = "",
}: BottomMenuItemProps) {
    const {} = useController();

    return (
        <>
            <li data-testid="BottomMenuItem">
                <a href={href}>
                    <div>
                        {icon}
                        <span>{title}</span>
                    </div>
                </a>
            </li>
        </>
    );
}

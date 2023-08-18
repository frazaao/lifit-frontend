import { redirect } from "next/navigation";

export default function PlatformPage() {
    redirect("/app/platform/home");
    return null;
}

import { redirect } from "next/navigation";

interface PatientProfilePageProps {
    params: {
        id: string;
    };
}

export default function PatientProfilePage({
    params,
}: PatientProfilePageProps) {
    redirect("/admin/dashboard/patients/" + params.id + "/personal-data");
}

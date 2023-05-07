import Button from "@/components/Button";
import Logo from "@/components/Logo";
import ReceptionSlider from "@/components/ReceptionSlider";
import Link from "next/link";

const carouselItems = [
    {
        image: "/images/eating-food.svg",
        title: "Se alimente bem",
        description:
            "Acesse receitas prontas que melhor se adaptam ao seu dia a dia.",
    },
    {
        image: "/images/running.svg",
        title: "Tenha hábitos saudáveis",
        description:
            "Alertas dinâmicos para te lembrar diariamente de hábitos saudáveis.",
    },
    {
        image: "/images/medical.svg",
        title: "Acompanhamento médico",
        description:
            "Tenha o acompanhamento de perto de um especialista na área.",
    },
];

export default function AppPage() {
    return (
        <>
            <main className="flex flex-col justify-between items-center w-full h-screen px-11 py-20">
                <div className="mb-12">
                    <Logo />
                </div>

                <ReceptionSlider items={carouselItems} />

                <Link href="/app/register" className="block w-full mt-8">
                    <Button className="w-full h-16 text-2xl">
                        Criar uma conta
                    </Button>
                </Link>
                <span className="mt-2 text-lg">
                    Já possui uma conta?
                    <Link
                        href="/app/login"
                        className="text-purple-primary  font-bold ml-1"
                    >
                        Fazer login
                    </Link>
                </span>
            </main>
        </>
    );
}

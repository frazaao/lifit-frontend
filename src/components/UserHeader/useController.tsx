interface useControllerProps {
    fullname: string;
}

export default function useController({ fullname }: useControllerProps) {
    const firstName = fullname.split(" ")[0];

    function getGreetings(): keyof typeof greetings {
        const currentTime = new Date().getHours();

        if (currentTime > 21) {
            return "Night";
        }

        if (currentTime > 17) {
            return "Evening";
        }

        if (currentTime > 12) {
            return "Afternoon";
        }

        if (currentTime > 5) {
            return "Morning";
        }

        return "Dawn";
    }

    const greetings = {
        Dawn: "Boa madrugada",
        Morning: "Bom dia",
        Afternoon: "Boa tarde",
        Evening: "Boa noite",
        Night: "Boa noite",
    };

    return { firstName, getGreetings, greetings };
}

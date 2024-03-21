import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import {useEffect, useState} from "react";

export default function CreateUser() {
    const [minDate, setMinDate] = useState(null);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [coffeeDate, setCoffeeDate] = useState("");

    useEffect(() => {
        const todaysDate = new Date();
        const year = todaysDate.getFullYear();
        const month = String(todaysDate.getMonth() + 1).padStart(2, "0");
        const date = String(todaysDate.getDate()).padStart(2, "0");

        setMinDate(`${year}-${month}-${date}`);
    }, []);

    return (
        <Card
            color="transparent"
            shadow={true}
            className="w-max mx-auto p-4"
        >
            <Typography variant="h4" color="blue-gray" className={"text-center"}>
                Add new user
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Input
                        size="lg"
                        required
                        placeholder="Jakiv"
                        label="User Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        required
                        size="lg"
                        placeholder="+380937654321"
                        label="User Phone Number"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <Input
                        required
                        size="lg"
                        type="date"
                        min={minDate}
                        label="Free coffee date"
                        onChange={(e) => setCoffeeDate(e.target.value)}
                    />
                </div>
                <Button
                    className="mt-12 capitalize"
                    fullWidth
                    variant="gradient"
                >
                    Add
                </Button>
            </form>
        </Card>
    );
}
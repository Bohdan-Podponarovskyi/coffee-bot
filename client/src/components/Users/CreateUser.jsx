import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import {useEffect, useState} from "react";

export default function CreateUser() {
    const [minDate, setMinDate] = useState(null);

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
            <Typography variant="h4" color="blue-gray">
                Add new user
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        User Name
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="Jakiv"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        User Phone
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="+380937654321"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Date
                    </Typography>
                    <Input
                        type="date"
                        min={minDate}
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
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
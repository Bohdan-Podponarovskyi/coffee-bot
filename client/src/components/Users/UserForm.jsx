import {Button, Input} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import {formatDate} from "../../utils.js";

export default function UserForm({
                                     name,
                                     setName,
                                     phone,
                                     setPhone,
                                     coffeeDate,
                                     setCoffeeDate,
                                     handleSubmit,
                                     buttonText
                                 }) {
    const [minDate, setMinDate] = useState('');

    useEffect(() => {
        const todaysDate = new Date();
        setMinDate(formatDate(todaysDate));
    }, []);

    return (
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
            <div className="mb-1 flex flex-col gap-6">
                <Input
                    size="lg"
                    required
                    placeholder="Jakiv"
                    label="User Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    required
                    size="lg"
                    placeholder="+380937654321"
                    label="User Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <Input
                    required
                    size="lg"
                    type="date"
                    min={minDate}
                    label="Free coffee date"
                    value={coffeeDate}
                    onChange={(e) => setCoffeeDate(e.target.value)}
                />
            </div>
            <Button
                className="mt-12 capitalize"
                fullWidth
                variant="gradient"
                type="submit"
            >
                {buttonText}
            </Button>
        </form>
    );
}
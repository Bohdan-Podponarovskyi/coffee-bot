import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

export default function UpdateUser() {
    const {id} = useParams();
    console.log(id);
    const [minDate, setMinDate] = useState(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [coffeeDate, setCoffeeDate] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const todaysDate = new Date();
        const year = todaysDate.getFullYear();
        const month = String(todaysDate.getMonth() + 1).padStart(2, "0");
        const date = String(todaysDate.getDate()).padStart(2, "0");

        setMinDate(`${year}-${month}-${date}`);
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8080/getUser/'+id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }, [])

    // console.log(users);

    function handleSubmit(e) {
        e.preventDefault();
        // let userId = Math.floor(Math.random() * 1000000) + 1;
        // axios.post("http://localhost:8080/createUser",  {userId, name, phone, coffeeDate})
        //     .then(result => {
        //         console.log(result)
        //         navigate("/")
        //     })
        //     .catch(err => console.log(err));
    }

    return (
        <Card
            color="transparent"
            shadow={true}
            className="w-max mx-auto p-4"
        >
            <Typography variant="h4" color="blue-gray" className={"text-center"}>
                Add new user
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
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
                    type="submit"
                >
                    Add
                </Button>
            </form>
        </Card>
    );
}
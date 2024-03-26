import {Card, Typography,} from "@material-tailwind/react";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserForm from "../components/Users/UserForm";

export default function CreateUser() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [coffeeDate, setCoffeeDate] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        let userId = Math.floor(Math.random() * 1000000) + 1;
        axios.post(`${import.meta.env.VITE_SERVER_URL}/createUser`,  {userId, name, phone, coffeeDate})
            .then(result => {
                console.log(result)
                navigate("/")
            })
            .catch(err => console.log(err));
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
            <UserForm
                name={name}
                setName={setName}
                phone={phone}
                setPhone={setPhone}
                coffeeDate={coffeeDate}
                setCoffeeDate={setCoffeeDate}
                handleSubmit={handleSubmit}
                buttonText="Add"
            />
        </Card>
    );
}
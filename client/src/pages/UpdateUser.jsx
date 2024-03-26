import {Card, Typography,} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";
import {formatDate} from "../utils.js";
import UserForm from "../components/Users/UserForm.jsx";

export default function UpdateUser() {
    const {id} = useParams();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [coffeeDate, setCoffeeDate] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/getUser/${id}`)
            .then(res => {
                setName(res.data.name)
                setPhone(res.data.phone)

                let coffeeDate = new Date(res.data.coffeeDate);
                setCoffeeDate(`${coffeeDate.getFullYear()}-${String(coffeeDate.getMonth() + 1).padStart(2, "0")}-${String(coffeeDate.getDate()).padStart(2, "0")}`);
            })
            .catch(err => console.log(err));
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${import.meta.env.VITE_SERVER_URL}/updateUser/${id}`,  {id, name, phone, coffeeDate})
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
                Update user
            </Typography>
            <UserForm
                name={name}
                setName={setName}
                phone={phone}
                setPhone={setPhone}
                coffeeDate={coffeeDate}
                setCoffeeDate={setCoffeeDate}
                handleSubmit={handleSubmit}
                buttonText="Update"
            />
        </Card>
    );
}
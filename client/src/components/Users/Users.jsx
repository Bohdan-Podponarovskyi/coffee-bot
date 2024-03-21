import {Card, Typography, Button} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const TABLE_HEAD = ["Name", "Phone", "Date", "Actions"];

const TABLE_ROWS = [
    {
        name: "John Michael",
        job: "Manager",
        date: "23/04/18",
    },
    {
        name: "Alexa Liras",
        job: "Developer",
        date: "23/04/18",
    },
    {
        name: "Laurent Perrier",
        job: "Executive",
        date: "19/09/17",
    },
    {
        name: "Michael Levi",
        job: "Developer",
        date: "24/12/08",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
];

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/")
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    }, [])

    console.log(users);

    return (
        <Card className="p-5 w-full items-start shadow-lg">
            <Link to={"/create"}>
                <Button variant="gradient" size="sm" className="mb-4">Add new</Button>
            </Link>
            <table className="w-full min-w-max table-auto text-center">
                <thead>
                <tr >
                    {TABLE_HEAD.map((head) => (
                        <th
                            key={head}
                            className="bg-gray-100 p-4 w-1/4 mx-1"
                        >
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                            >
                                {head}
                            </Typography>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {users.map((user) => {
                    const classes = "p-4 border-b border-blue-gray-50";

                    return (
                        <tr key={user._id}>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {user.name}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {user.phone}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {user.coffeeDate}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Link to={"/update"}>
                                    <Button
                                        color="teal"
                                        size="sm"
                                        variant="gradient"
                                        className="mx-1 normal-case"
                                    >
                                        Edit
                                    </Button>
                                </Link>
                                <Button
                                    color="deep-orange"
                                    size="sm"
                                    variant="gradient"
                                    className="mx-1 normal-case"
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </Card>
    );
}
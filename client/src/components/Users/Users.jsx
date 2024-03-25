import {Card, Typography, Button} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {formatDate} from "../../utils.js";

const TABLE_HEAD = ["Name", "Phone", "Date", "Actions"];

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}`)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete(`${import.meta.env.VITE_SERVER_URL}/deleteUser/${id}`)
            .then(res => {
                console.log(res)
                window.location.reload();
            })
            .catch(err => console.log(err));

    }

    return (
        <Card className="p-5 w-full items-start shadow-lg">
            <Link to={"/create"}>
                <Button variant="gradient" size="sm" className="mb-4">Add new</Button>
            </Link>
            <table className="w-full min-w-max table-auto text-center">
                <thead>
                <tr>
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
                    const formattedDate = formatDate(user.coffeeDate);

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
                                    {formattedDate}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Link to={`/update/${user._id}`}>
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
                                    onClick={(e) => handleDelete(user._id)}>
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
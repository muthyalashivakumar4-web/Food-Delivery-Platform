import {
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    TextField,
    CircularProgress
} from "@mui/material";

import { useState, useEffect, useMemo } from "react";

import {
    getAllUsers,
    deleteUser
} from "../../api/adminApi";

export default function AdminUsers() {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            setLoading(true);
            const data = await getAllUsers();
            setUsers(data);
        } catch (error) {
            console.error(error);
            alert("Unable to load users.");
        } finally {
            setLoading(false);
        }
    };

    const removeUser = async (id) => {
        if (!window.confirm("Delete this user?")) return;

        try {
            await deleteUser(id);
            loadUsers();
        } catch (error) {
            console.error(error);
            alert("Unable to delete user.");
        }
    };

    const filteredUsers = useMemo(() => {
        return users.filter(user =>
            user.email?.toLowerCase().includes(search.toLowerCase()) ||
            user.name?.toLowerCase().includes(search.toLowerCase())
        );
    }, [users, search]);

    return (
        <Container sx={{ mt: 4 }}>

            <Typography variant="h4" gutterBottom>
                Manage Users
            </Typography>

            <TextField
                fullWidth
                label="Search User"
                sx={{ mb: 3 }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <TableContainer component={Paper}>

                <Table>

                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>

                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={5} align="center">
                                    <CircularProgress />
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredUsers.map(user => (
                                <TableRow key={user.id}>

                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name || "N/A"}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.role || "N/A"}</TableCell>

                                    <TableCell>
                                        <Button
                                            color="error"
                                            variant="contained"
                                            onClick={() => removeUser(user.id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>

                                </TableRow>
                            ))
                        )}

                    </TableBody>

                </Table>

            </TableContainer>

        </Container>
    );
}
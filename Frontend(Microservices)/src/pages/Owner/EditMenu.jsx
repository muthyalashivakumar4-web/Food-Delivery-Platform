import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    CircularProgress
} from "@mui/material";

import {
    useState,
    useEffect
} from "react";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import {
    getMenuItem,
    updateMenuItem
} from "../../api/menuApi";

export default function EditMenu() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [menu, setMenu] = useState({

        itemName: "",

        description: "",

        price: "",

        restaurantId: ""

    });

    useEffect(() => {

        loadMenu();

    }, []);

    const loadMenu = async () => {

        try {

            const data =
                await getMenuItem(id);

            setMenu(data);

        }
        catch (error) {

            console.error(error);

            alert("Unable to load menu item.");

        }
        finally {

            setLoading(false);

        }

    };

    const handleChange = (e) => {

        setMenu({

            ...menu,

            [e.target.name]:
                e.target.value

        });

    };

    const handleUpdate = async () => {

        if (
            menu.itemName.trim() === "" ||
            menu.price === ""
        ) {

            alert(
                "Item Name and Price are required."
            );

            return;

        }

        try {

            await updateMenuItem(

                id,

                {

                    ...menu,

                    price:
                        Number(menu.price)

                }

            );

            alert(
                "Menu Updated Successfully"
            );

            navigate("/owner/menu");

        }
        catch (error) {

            console.error(error);

            alert(
                "Failed to update menu."
            );

        }

    };

    if (loading) {

        return (

            <Container sx={{ mt: 5 }}>

                <CircularProgress />

            </Container>

        );

    }

    return (

        <Container
            maxWidth="sm"
        >

            <Paper
                sx={{
                    p: 4,
                    mt: 4
                }}
            >

                <Typography
                    variant="h4"
                    gutterBottom
                >

                    Edit Menu Item

                </Typography>

                <TextField
                    fullWidth
                    margin="normal"
                    label="Item Name"
                    name="itemName"
                    value={menu.itemName}
                    onChange={handleChange}
                />

                <TextField
                    fullWidth
                    multiline
                    rows={3}
                    margin="normal"
                    label="Description"
                    name="description"
                    value={menu.description}
                    onChange={handleChange}
                />

                <TextField
                    fullWidth
                    margin="normal"
                    type="number"
                    label="Price"
                    name="price"
                    value={menu.price}
                    onChange={handleChange}
                />

                <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3 }}
                    onClick={handleUpdate}
                >

                    Update Menu

                </Button>

            </Paper>

        </Container>

    );

}
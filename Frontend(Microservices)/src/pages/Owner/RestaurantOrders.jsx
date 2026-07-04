import {
    Container,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Select,
    MenuItem,
    Button,
    Paper
} from "@mui/material";

import {
    useEffect,
    useState
} from "react";

import {
    getRestaurantOrders,
    updateOrderStatus
} from "../../api/orderApi";

export default function RestaurantOrders() {

    const restaurantId =
        Number(localStorage.getItem("restaurantId"));

    const [orders,setOrders]=
        useState([]);

    useEffect(()=>{

        loadOrders();

    },[]);

    const loadOrders=async()=>{

        const data=
            await getRestaurantOrders(
                restaurantId
            );

        setOrders(data);

    };

    const updateStatus=async(id,status)=>{

        await updateOrderStatus(
            id,
            status
        );

        loadOrders();

    };

    return(

        <Container sx={{mt:4}}>

            <Typography
                variant="h4"
                gutterBottom
            >

                Restaurant Orders

            </Typography>

            <Paper>

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell>Order</TableCell>

                            <TableCell>User</TableCell>

                            <TableCell>Amount</TableCell>

                            <TableCell>Status</TableCell>

                            <TableCell>Action</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {

                            orders.map(order=>(

                                <TableRow
                                    key={order.id}
                                >

                                    <TableCell>

                                        {order.id}

                                    </TableCell>

                                    <TableCell>

                                        {order.userId}

                                    </TableCell>

                                    <TableCell>

                                        ₹{order.totalAmount}

                                    </TableCell>

                                    <TableCell>

                                        <Select

                                            value={
                                                order.status
                                            }

                                            onChange={(e)=>{

                                                const updated=[...orders];

                                                updated.find(o=>o.id===order.id).status=e.target.value;

                                                setOrders(updated);

                                            }}

                                        >

                                            <MenuItem value="PLACED">PLACED</MenuItem>

                                            <MenuItem value="CONFIRMED">CONFIRMED</MenuItem>

                                            <MenuItem value="PREPARING">PREPARING</MenuItem>

                                            <MenuItem value="OUT_FOR_DELIVERY">OUT FOR DELIVERY</MenuItem>

                                            <MenuItem value="DELIVERED">DELIVERED</MenuItem>

                                            <MenuItem value="CANCELLED">CANCELLED</MenuItem>

                                        </Select>

                                    </TableCell>

                                    <TableCell>

                                        <Button
                                            variant="contained"
                                            onClick={()=>updateStatus(order.id,order.status)}
                                        >

                                            Update

                                        </Button>

                                    </TableCell>

                                </TableRow>

                            ))

                        }

                    </TableBody>

                </Table>

            </Paper>

        </Container>

    );

}
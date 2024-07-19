import { ShoppingCart } from "@mui/icons-material";
import {
  Badge,
  ButtonBase,
  Grid,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useReducer } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return state.map((item, index) =>
        index === action.payload.index
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case "sub":
      return state
        .map((item, index) =>
          index === action.payload.index
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0);
    case "delete":
      return state.filter((_, index) => index !== action.payload.index);
    default:
      return state;
  }
}

const App = () => {
  const [items, dispatch] = useReducer(reducer, [
    {
      id: 1,
      quantity: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      quantity: 1,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      quantity: 1,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      quantity: 1,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 5,
      quantity: 1,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
  ]);
  useEffect(() => {}, [items]);
  console.log(items);
  function add(id) {
    dispatch({ type: "add", payload: { index: id } });
  }
  function sub(id) {
    dispatch({ type: "sub", payload: { index: id } });
  }
  function del(id) {
    dispatch({ type: "delete", payload: { index: id } });
  }
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ background: "royalblue", color: "white" }}
      >
        <Grid item xs={8}>
          <ListItem sx={{ padding: "20px" }}>
            <Typography variant="h6">useReducer Example</Typography>
          </ListItem>
        </Grid>
        <Grid item xs={4}>
          <ListItem
            sx={{ padding: "20px", display: "flex", justifyContent: "center" }}
          >
            <Badge badgeContent={items.length} color="primary">
              <ShoppingCart sx={{ color: "white" }} />
            </Badge>
          </ListItem>
        </Grid>
      </Grid>

      {items.map((e, index) => {
        return (
          <div>
            <Paper
              sx={{
                p: 2,
                maxWidth: 1000,
                flexGrow: 1,
                margin: "20px auto",
              }}
            >
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase sx={{ width: 128, height: 128 }}>
                    <img
                      alt="complex"
                      src={`${e.image}`}
                      height={"100px"}
                      width={"100px"}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        {e.title}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {e.category}
                      </Typography>
                      <Typography variant="h6" color="text.primary">
                        ${e.price}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        sx={{ cursor: "pointer" }}
                        variant="body2"
                        onClick={() => del(index)}
                      >
                        Remove
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="subtitle1" component="div">
                      <KeyboardArrowUpIcon
                        onClick={() => add(index)}
                        sx={{ cursor: "pointer" }}
                      />
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                      {e.quantity}
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                      <KeyboardArrowDownIcon
                        onClick={() => sub(index)}
                        sx={{ cursor: "pointer" }}
                      />
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        );
      })}
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 700,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          Total :{" "}
          <p style={{ color: "royalblue", fontWeight: "700" }}>
            ${items.reduce((acc, e) => acc + e.quantity * e.price, 0)}
          </p>
        </Typography>
      </Paper>
    </div>
  );
};

export default App;

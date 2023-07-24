import { MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { allCurrency } from "./Constant";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./index.css";

function CurrencyConverter() {
  const [currency, setCurrency] = useState({
    type: "Rupee",
    amount: "",
  });
  const [calCurrency, setCalCurrency] = useState({
    type: "Dollar",
    amount: "",
  });
  const { type, amount } = currency;

  const { type: calType, amount: calAmount } = calCurrency;
  const changeHandler = (e) => {
    setCurrency({
      ...currency,
      [e.target.name]: e.target.value,
    });
  };
  const currencyChangeHandler = (e) => {
    setCalCurrency({
      ...calCurrency,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    currencyConverterHandler();
  }, [amount, type, calCurrency.type]);
  const currencyConverterHandler = () => {
    if (type === calCurrency.type) {
      alert("Please select a different type of currency for conversion");
      setCalCurrency({
        ...calCurrency,
        amount: 0,
      });
    } else {
      switch (type) {
        case "Rupee":
          switch (calCurrency.type) {
            case "Dollar": {
              return setCalCurrency({ ...calCurrency, amount: amount * 0.012 });
            }
            case "Euro": {
              return setCalCurrency({ ...calCurrency, amount: amount * 0.011 });
            }
            case "Kuwaiti Dinar": {
              return setCalCurrency({
                ...calCurrency,
                amount: amount * 0.0037,
              });
            }
            case "Canadian Dollar": {
              return setCalCurrency({ ...calCurrency, amount: amount * 0.016 });
            }
            default:
              alert(
                "Please select a different type of currency for conversion"
              );
          }
        case "Dollar":
          switch (calCurrency.type) {
            case "Euro": {
              return setCalCurrency({ ...calCurrency, amount: amount * 0.92 });
            }
            case "Rupee": {
              return setCalCurrency({ ...calCurrency, amount: amount * 82.03 });
            }
            case "Kuwaiti Dinar": {
              return setCalCurrency({ ...calCurrency, amount: amount * 0.31 });
            }
            case "Canadian Dollar": {
              return setCalCurrency({ ...calCurrency, amount: amount * 1.33 });
            }
            default:
              alert(
                "Please select a different type of currency for conversion"
              );
          }
        case "Euro":
          switch (calCurrency.type) {
            case "Dollar": {
              return setCalCurrency({ ...calCurrency, amount: amount * 1.09 });
            }
            case "Rupee": {
              return setCalCurrency({ ...calCurrency, amount: amount * 89.4 });
            }
            case "Kuwaiti Dinar": {
              return setCalCurrency({ ...calCurrency, amount: amount * 0.34 });
            }
            case "Canadian Dollar": {
              return setCalCurrency({ ...calCurrency, amount: amount * 1.45 });
            }
            default:
              alert(
                "Please select a different type of currency for conversion"
              );
          }
        case "Kuwaiti Dinar":
          switch (calCurrency.type) {
            case "Dollar": {
              return setCalCurrency({ ...calCurrency, amount: amount * 3.25 });
            }
            case "Euro": {
              return setCalCurrency({ ...calCurrency, amount: amount * 2.98 });
            }
            case "Rupee": {
              return setCalCurrency({
                ...calCurrency,
                amount: amount * 266.79,
              });
            }
            case "Canadian Dollar": {
              return setCalCurrency({ ...calCurrency, amount: amount * 4.31 });
            }
            default:
              alert(
                "Please select a different type of currency for conversion"
              );
          }
        case "Canadian Dollar":
          switch (calCurrency.type) {
            case "Dollar": {
              return setCalCurrency({ ...calCurrency, amount: amount * 0.75 });
            }
            case "Euro": {
              return setCalCurrency({ ...calCurrency, amount: amount * 0.69 });
            }
            case "Rupee": {
              return setCalCurrency({ ...calCurrency, amount: amount * 61.85 });
            }
            case "Kuwaiti Dinar": {
              return setCalCurrency({ ...calCurrency, amount: amount * 0.23 });
            }
            default:
              alert(
                "Please select a different type of currency for conversion"
              );
          }
        default:
          alert("Select The Currency");
      }
    }
  };
  console.log(currency, calCurrency);
  return (
    <Card className="currency">
      <Typography className="heading" variant="h4">
        Exchange Ratio{" "}
      </Typography>
      <Typography variant="h6" pb={5} mt={1} className="timer">
        {calAmount}
      </Typography>
      <div>
        <Grid container gap={1}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                alig
                fullWidth
                name="amount"
                type="number"
                onChange={changeHandler}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography className="CalText">From</Typography>
              <TextField
                fullWidth
                name="type"
                value={type}
                onChange={changeHandler}
                select
              >
                {allCurrency.map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <Typography>To</Typography>
              <TextField
                fullWidth
                name="type"
                value={calType}
                select
                onChange={currencyChangeHandler}
              >
                {allCurrency.map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Grid mt={2} item xs={12}>
            {/* <Button
              variant="contained"
              fullWidth
              onClick={currencyConverterHandler}
            >
              Convert
            </Button> */}
          </Grid>
        </Grid>
      </div>
    </Card>
  );
}

export default CurrencyConverter;

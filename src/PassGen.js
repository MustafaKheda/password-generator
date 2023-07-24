import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import "./index.css";
import { useState } from "react";

export default function PassGen() {
  const [data, setData] = useState({
    length: 8,
    lower: true,
    upper: true,
    special: false,
    number: false,
  });

  const [pass, setPass] = useState("");
  const dataHandler = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  console.log(data);
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let specialCharacter = "@#$!%^&*()_+=-{}[]?><./";
  let number = "0123456789";

  let randomPassword = "";

  const passwordChangehandler = () => {
    let character = "";
    if (data.length >= 8) {
      if (data.lower) {
        character += lowercase;
      }
      if (data.upper) {
        character += upperCase;
      }
      if (data.special) {
        character += specialCharacter;
      }
      if (data.number) {
        character += number;
      }

      if (character === "" || character === undefined) {
        alert("Select Atleast one type");
        setPass("");
      } else {
        for (let i = 0; i < data.length; i++) {
          let indexValue = Math.round(Math.random() * character.length - 1);
          if (indexValue > 0) randomPassword += character[indexValue];
        }

        setPass(randomPassword);
      }
    } else {
      alert("length of the password cannot be less than 8");
    }
    character = "";
  };
  // const passwordChangehandler = () => {
  //   let character = "";

  //   if (data.length >= 8) {
  //     if (data.upper) {
  //       character += upperCase;
  //     }
  //     if (data.special) {
  //       character += specialCharacter;
  //     }
  //     if (data.number) {
  //       character += number;
  //     }

  //     // if (character === "" || character === undefined) {
  //     //   alert("Select Atleast one type");
  //     //   setPass("");
  //     // } else {
  //     for (let i = 0; i < data.length; i++) {
  //       let index = Math.ceil(lowercase.length * Math.random);
  //       if (data.lower) {
  //         character += lowercase[index];
  //       }
  //       let indexValue = Math.round(Math.random() * character.length - 1);
  //       if (indexValue > 0) randomPassword += character[indexValue];
  //     }

  //     setPass(randomPassword);
  //   } else {
  //     alert("length of the password cannot be less than 8");
  //   }
  //   character = "";
  // };
  const handleClipboard = async () => {
    if (pass) {
      await navigator.clipboard.writeText(pass);
      alert("Password Copied", pass);
      setPass("");
    }
  };
  return (
    <>
      <Card className="card">
        <Typography className="heading" variant="h5">
          Password Generator
        </Typography>
        <div className="innerBody">
          <Grid>
            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ContentCopyIcon onClick={handleClipboard} />
                    {/* <Button color={Warning} onClick={handleClipboard}>
                      Copy
                    </Button> */}
                  </InputAdornment>
                ),
              }}
              className="showPassword"
              label="password"
              value={pass}
              aria-readonly
            />

            {/* <Button onClick={handleClipboard}>Copy</Button> */}
          </Grid>
          <Grid container pt={1}>
            <Grid item xs={6} md={6}>
              <Typography className="text" variant="body1">
                Length
              </Typography>
            </Grid>
            <Grid className="showNumberItem" item xs={6} md={6}>
              <TextField
                className="showNumber"
                name="length"
                label="number"
                type="number"
                onChange={dataHandler}
                value={data.length}
              />
            </Grid>
          </Grid>

          <FormGroup>
            <FormControlLabel
              name="lower"
              control={<Checkbox />}
              label="Lower Case"
              onChange={dataHandler}
              checked={data.lower}
              className="checkbox"
              labelPlacement="start"
            />
            <FormControlLabel
              name="upper"
              control={<Checkbox />}
              className="checkbox"
              label="Upper Case"
              onChange={dataHandler}
              checked={data.upper}
              labelPlacement="start"
            />
            <FormControlLabel
              name="special"
              className="checkbox"
              control={<Checkbox />}
              label="Special Character"
              onChange={dataHandler}
              checked={data.special}
              labelPlacement="start"
            />
            <FormControlLabel
              name="number"
              control={<Checkbox />}
              className="checkbox"
              onChange={dataHandler}
              label="Number"
              checked={data.number}
              labelPlacement="start"
            />
          </FormGroup>
        </div>
        <Button className="button" onClick={passwordChangehandler}>
          Password Generator
        </Button>
      </Card>
    </>
  );
}

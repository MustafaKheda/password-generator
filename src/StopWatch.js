import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./index.css";
import { useEffect, useState } from "react";
export default function Stopwatch() {
  const [working, setWorking] = useState(false);
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    let interval;
    if (working) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [working]);

  const restWatch = (e) => {
    setTimer(0);
    setWorking(false);
  };
  return (
    <>
      <Card className="watch">
        <Typography className="heading" variant="h5">
          Stop Watch
        </Typography>
        <div className="innerBody">
          <Grid container pt={1} className="timer">
            <Typography variant="h5" className="timer">
              {("0" + (Math.floor(timer / 60000) % 60)).slice(-2)}:
              {("0" + (Math.floor(timer / 1000) % 60)).slice(-2)}:
              {("0" + (Math.floor(timer / 10) % 100)).slice(-2)}
            </Typography>
          </Grid>
        </div>
        <Grid className="AllButton">
          <Button className="button" onClick={() => setWorking(!working)}>
            {working ? "stop" : "start"}
          </Button>
          <Button className="button" onClick={restWatch}>
            reset
          </Button>
        </Grid>
      </Card>
    </>
  );
}

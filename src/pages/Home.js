import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid
} from '@material-ui/core';

const Home = () => (
  <Grid id="home-page" className="page-content d-flex flex-fill"
    container
  >
    <Grid item xs={12} sm={6}>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Welcome
          </Typography>
          <Typography color="textPrimary">
            Thank you for taking the time to write this code,
            Edit <code>src/App.js</code> and save to reload.
            There is still more work to do on the Home page.
          </Typography>
        </CardContent>
        <CardActions>
          <a href="https://www.github.com/0cost/0cost.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="primary">Github</Button>
          </a>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="primary">Learn React</Button>
          </a>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
);

export default Home;

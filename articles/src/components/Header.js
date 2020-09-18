import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  title: {
    flex: 1,
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.header}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.title}
        >
          {title}
        </Typography>
        <Link to="/add">Add New</Link>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm, Controller } from "react-hook-form";
import {createArticle, getCategories} from "../api";
import { useHistory } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CreateArticle() {
  const [categories, setCategories] = useState();
  const { control, register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();
  const onSubmit = data => {
    createArticle(data, history);
  }
  const classes = useStyles();
  useEffect(()=> {
    getCategories(setCategories);
  },[])

  console.log(categories);

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add New Article
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className={classes.form} noValidate>
              <InputLabel id="category_id">Select Category</InputLabel>
              <Controller
                  as={<Select>
                      {categories && categories.map((item) => (
                          <MenuItem key={item.id} value={item.id}>
                              {item.name}
                          </MenuItem>
                      ))
                      }
                  </Select>}
                  labelId="category_id"
                  id="category_id"
                  name="category_id"
                  fullWidth
                  control={control}
                  rules={{ required: "Requires" }}
            />
            <span className='error-text'>{errors.category_id && 'Category is required'}</span>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="content"
                label="Content"
                name="content"
                autoComplete="content"
                inputRef={register({ required: true })}
                autoFocus
                control={control}
            />
            <span className='error-text'>{errors.content && 'Content is required'}</span>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="name"
                label="Name"
                type="name"
                id="name"
                inputRef={register({ required: true })}
                control={control}
            />
            <span className='error-text'>{errors.name && 'Name is required'}</span>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
  );
}

import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function Article(props) {
  const classes = useStyles();
  const { article } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {article.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {article.created_at}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Category {article.category.name}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {article.content}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Written by: {article.user.name}
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={'https://source.unsplash.com/random'}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

Article.propTypes = {
  article: PropTypes.object,
};

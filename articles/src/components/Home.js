import * as React from 'react';
import { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';
import { getArticles } from '../api';

export default function Home() {
  const [articles, setArticles] = useState();

  useEffect(()=> {
    getArticles(setArticles);
  },[])

  console.log(articles);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Articles" />
        <main>
          <Grid container spacing={4}>
            {articles && articles.map((article) => (
              <Article key={article.id} article={article} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}

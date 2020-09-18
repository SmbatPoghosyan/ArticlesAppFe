import axios from 'axios';

const baseUrl = "http://localhost:8080/";
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');


export const login = (data, history) => {
    axios.post(baseUrl + 'login', data).then(res => {
        if (res.data) {
            const user = res.data;
            localStorage.setItem("token", user.token);
            localStorage.setItem("login", user.login);
            localStorage.setItem("name", user.name);
            localStorage.setItem("isLoggedIn", true);
            history.push("/home");
        }
    }).catch(err => console.log(err));
}


export const getArticles = (setArticles) => {
    axios.get(baseUrl + 'articles').then(res => {
        if (res.data) {
            const articles = res.data;
            setArticles(articles);
        }
    }).catch(err => console.log(err));
}

export const createArticle = (data, history) => {
    axios.post(baseUrl + 'articles', data).then(res => {
        if (res.data) {
            history.push("/home");
        }
    }).catch(err => console.log(err));
}


export const getCategories = (setCategories) => {
    axios.get(baseUrl + 'categories').then(res => {
        if (res.data) {
            const categories = res.data;
            setCategories(categories);
        }
    }).catch(err => console.log(err));
}






import logo from './logo.svg';
import './App.css';
import News from './components/News'
import { useEffect, useState } from 'react';
function App() {
  const [articles,setArticles] =  useState([]);
  useEffect(() =>{
    const url = "https://newsapi.org/v2/everything?q=tesla&from=2021-04-21&sortBy=publishedAt&apiKey=ccf5ab0c03404bd6bf16d40f5126e13a"
    fetch(url)
    .then(response => response.json())
    .then(data=>setArticles(data.articles))
  },[])
  return (
    <div className="App">
    <h2>get latest news</h2>
    {
      articles.map(article=> <News key={article.id} article={article}></News>)
    }      
    </div>
  );
}

export default App;

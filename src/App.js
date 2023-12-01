import React, { useEffect, useState } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from './components/NewsCards/NewsCards';
import wordsToNumbers from 'words-to-numbers';

const alanKey = '9c869a19639449047c20590bc5921e5d2e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticleIndex, setActiveArticleIndex] = useState(-1);

  useEffect(() => {
    const alanInstance = alanBtn({
      key: alanKey,
      onCommand: ({ command, results, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(results);
          setActiveArticleIndex(-1);
        } else if (command === 'highlight') {
          setActiveArticleIndex((prevActive) => prevActive + 1);
        } else if (command === 'openArticle') {
          number = number-1;
          console.log(number);
          
            // window.open(results[number].link, '_blank');

            if( number <= 9 && number >=0){
              window.open(results[number].link , '_self' )
            }
            else{
              console.log("fuddu")
              alanInstance.playText("Article doesn't exist. Please try again.")
            }      
           
        }
      }
    });
    
  }, []);

  console.log(newsArticles);

  return (
    <div>
      <NewsCards articles={newsArticles} activeArticleIndex={activeArticleIndex} />
    </div>
  );
}

export default App;

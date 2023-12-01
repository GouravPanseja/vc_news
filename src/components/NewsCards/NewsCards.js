import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import styles from "./styles"
import { Typography } from '@mui/material';


const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];
  

const NewsCards = ({articles ,activeArticleIndex}) => {
  // ${classes, container}
 
  if(!articles.length){
    return(
      <div>
          <div className=''>
            <img className=' block mx-auto rounded-md  mt-6 h-[300px] md:w-[300px] md:h-[200px] w-[500px] object-cover' src="https://images.unsplash.com/photo-1525184990509-4fd44ed9e056?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1552012086-18eece80a2d9?q=80&w=2308&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />
          </div>

          <div className='flex flex-wrap flex-row text-white w-screen justify-center'>
          
            {
          
          infoCards.map((infoCard,index)=>(
            

              <div className='flex flex-col justify-between h-[400px] w-[300px] rounded-md p-[30px] m-3  text-center ' style={{backgroundColor:infoCard.color }}>
                <p className='text-[1rem]' vairient="h5"> {infoCard.title} </p>
                {infoCard.info ? <p className='text-[1rem]' variant='h6'> <strong>{infoCard.title.split(' ')[2]}:</strong><br/>{infoCard.info}  </p>  :  null}
                <p className='text-[1rem]' variant="h6" >Try saying: <br/> <i>{infoCard.text}</i></p>
              </div>

           
          ))
        }
        </div>
      </div>
      
      
    )
  }
  return (
          <div  className={`justify-center  py-[5%] w-full m-0 flex flex-wrap  text-[2rem]  text-red-200`}>
      
          {
            articles.map((article,idx)=>{
              return(

                  <NewsCard article={article} index={idx} activeArticleIndex={activeArticleIndex}/>
              )   
              })
          }         

          </div>
            
        
    

  )
}

export default NewsCards;

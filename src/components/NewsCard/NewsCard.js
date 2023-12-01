import React from "react";

import {Card ,CardActions , CardActionArea , CardContent, CardMedia, Button, Typography} from '@mui/material';



const NewsCard = ({article , index,activeArticleIndex}) => {
    let {title,link,creator, description,content, pubDate ,image_url, source_id } = article;
    if(title && title.split(' ').length > 5){ title = title.split(" ").splice(0,5).join(" ")};

    if(description && description.length > 150){ description=  description.slice(0,150)};
    
  return (
    <Card className={` md:h-[350px] md:w-[250px]  h-[450px] w-[350px] m-4 flex flex-col justify-between items-center box-border ${ activeArticleIndex===index ? "border-b-[10px] border-purple-800" : null}`}>
        <CardActionArea href={link} target="_blank ">
            <CardMedia className="h-[150px] w-full object-cover" image={image_url || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdD0VrpCK1oZDuGiy_9MqptMIJBPP4QVKWyXoxwgPDQep3W1TOGyOJYhdB9KLrFiUEBeM&usqp=CAU'} />
            <div className="p-4 pb-0">
                <div className="flex justify-between pb-0" >
                    <Typography variant = "body2" color="textSecondary" component="h2">{(new Date(pubDate)).toDateString()}</Typography>
                    <Typography variant = "body2" color="textSecondary" component="h2">{ creator ? creator : source_id}</Typography>
                </div>

                <Typography  gutterBottom variant="h5">{title}...</Typography>
            </div>
            <CardContent className="pt-0">
                <Typography className="p-0" variant="body2" color="textSecondary" component="p">{description}...</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions className="flex justify-between px-2">
            <Button size="small" color="primary">Learn More</Button>
            <Typography variant="h5" color="textSecondary">{index+1}</Typography>
        </CardActions>

    </Card>
  )
}

export default NewsCard
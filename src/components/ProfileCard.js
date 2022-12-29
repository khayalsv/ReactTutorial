import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function ProfileCard({ title, handle, image }) {

    // const title = props.title;
    // const handle = props.handle;

    // const { title, handle } = props;

    return (
        <>
           
            <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                    sx={{ height :310 }}
                    image={image}
                    title=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {handle}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default ProfileCard
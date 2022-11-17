import {Card, CardContent, CardMedia, Typography} from "@mui/material";

const Team = ({team}) => {

    return (
        <Card
            elevation={0}
            variant="outlined"
            sx={{
                mx: 2,
                height: '100%',
                position: 'relative',
                '&:hover': {
                    '& .media': {
                        transform: 'scale(1.1)',
                        transition: 'transform 350ms ease-in-out'
                    }
                }
            }}>
            <CardMedia
                className="media"
                src={team.image}
                sx={{
                    overflow: 'hidden',
                    height: 250,
                    objectFit: 'cover',
                    objectPosition: 'top'
                }}
                component="img"
            />
            <CardContent>
                <Typography variant="h6" align="center" sx={{color: 'text.primary', mb: 1}}>
                    {team.name}
                </Typography>
                <Typography variant="body2" align="center" sx={{color: 'text.secondary', mb: 1}}>
                    {team.role} ({team.occupation})
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Team;

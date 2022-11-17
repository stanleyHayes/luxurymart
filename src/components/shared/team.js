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
            <CardContent>
                <Avatar variant="circular" sx={{width: 100, height: 100, mb: 2}}>
                    <Typography variant="h6" align="center" sx={{color: 'text.primary', mb: 1}}>
                        {UTILS.getInitials(team.name)}
                    </Typography>
                </Avatar>

                <Typography variant="h6" align="center" sx={{color: 'text.primary', mb: 1}}>
                    {team.name}
                </Typography>
                <Typography variant="body2" align="center" sx={{color: 'text.secondary', mb: 1}}>
                    {team.role}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Team;

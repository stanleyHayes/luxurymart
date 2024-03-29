import {Card, CardContent, Typography} from "@mui/material";

const CoreValue = ({value}) => {

    return (
        <Card
            elevation={0}
            sx={{
                height: '100%',
                borderBottomRightRadius: 0,
                borderTopRightRadius: 32,
                borderBottomLeftRadius: 32,
                borderTopLeftRadius: 0,
            }}>
            <CardContent>
                <Typography
                    sx={{color: 'primary.main', textTransform: "capitalize"}}
                    variant="h5"
                    align="center">{value.name}</Typography>
            </CardContent>
        </Card>
    )
}

export default CoreValue;

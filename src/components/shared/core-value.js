import {Card, CardContent, Grid, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";

const CoreValue = ({value}) => {

    return (
        <Card elevation={0} sx={{height: '100%'}}>
            <CardContent>
                <Typography
                    mb={2}
                    sx={{color: 'primary.main'}}
                    variant="h5"
                    align="center">{value.name}</Typography>
            </CardContent>
        </Card>
    )
}

export default CoreValue;
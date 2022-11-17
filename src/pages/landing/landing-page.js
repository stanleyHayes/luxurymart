import {
    AppBar,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Link,
    Stack,
    Toolbar,
    Typography
} from "@mui/material";
import Mission from "../../components/shared/mission";
import ContactForm from "../../components/shared/contact-form";

import mission from "./../../assets/images/icons/mission.png";
import vision from "./../../assets/images/icons/vision.png";
import {UTILS} from "../../utils/utils";
import {LUXURY_MART_DATA} from "../../utils/data";
import Team from "../../components/shared/team";

import Carousel from "react-multi-carousel";
import {CallOutlined, LocationOnOutlined, MailOutlined} from "@mui/icons-material";
import {Element, Link as ScrollLink} from "react-scroll";
import CoreValue from "../../components/shared/core-value";
import banner from "./../../assets/images/banner/banner.jpg";
import Overlay from "../../components/shared/overlay";
import 'react-multi-carousel/lib/styles.css';

const LandingPage = () => {
    return (
        <Box>
            <Box id="top">
                <AppBar
                    sx={{backgroundColor: "#000"}}
                    elevation={0}>
                    <Toolbar>
                        <Grid container={true} spacing={2} justifyContent="center">
                            <Grid item={true} xs="auto" md="auto">
                                <ScrollLink
                                    spy={true}
                                    to="home"
                                    delay={100}
                                    duration={2000}
                                    smooth={true}>
                                    <Typography
                                        sx={{
                                            color: "white",
                                            cursor: "pointer",
                                            "&:hover": {color: "#19ffb9", transition: "all 50ms 500ms ease-out"},
                                            fontSize: {xs: 12, lg: 16}
                                        }}
                                        variant="h6">
                                        Home
                                    </Typography>
                                </ScrollLink>
                            </Grid>
                            <Grid item={true} xs="auto" md="auto">
                                <ScrollLink
                                    spy={true}
                                    to="about"
                                    delay={100}
                                    duration={2000}
                                    smooth={true}>
                                    <Typography
                                        sx={{
                                            color: "white",
                                            cursor: "pointer",
                                            "&:hover": {color: "#19ffb9", transition: "all 50ms 500ms ease-out"},
                                            fontSize: {xs: 12, lg: 16}
                                        }}
                                        variant="h6">
                                        About
                                    </Typography>
                                </ScrollLink>
                            </Grid>
                            <Grid item={true} xs="auto" md="auto">
                                <ScrollLink
                                    spy={true}
                                    to="contact"
                                    delay={100}
                                    duration={2000}
                                    smooth={true}>
                                    <Typography
                                        sx={{
                                            color: "white",
                                            cursor: "pointer",
                                            "&:hover": {color: "#19ffb9", transition: "all 50ms 500ms ease-out"},
                                            fontSize: {xs: 12, lg: 16}
                                        }}
                                        variant="h6">
                                        Contact
                                    </Typography>
                                </ScrollLink>
                            </Grid>
                            <Grid item={true} xs="auto" md="auto">
                                <ScrollLink
                                    spy={true}
                                    to="products"
                                    delay={100}
                                    duration={2000}
                                    smooth={true}>
                                    <Typography
                                        sx={{
                                            color: "white",
                                            cursor: "pointer",
                                            "&:hover": {color: "#19ffb9", transition: "all 50ms 500ms ease-out"},
                                            fontSize: {xs: 12, lg: 16}
                                        }}
                                        variant="h6">
                                        Products
                                    </Typography>
                                </ScrollLink>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>

            <Element>
                <Element id="home" name="home">
                    <Box>
                        <Overlay
                            children={
                                <Box sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                                    <Container>
                                        <Typography variant="h3" sx={{color: 'white', mb: 2}}>
                                            Luxury Mart
                                        </Typography>
                                    </Container>
                                </Box>}
                            image={banner}
                            backgroundColor="#000000"/>
                    </Box>
                </Element>

                <Element id="about" name="about">
                    <Box
                        sx={{
                            minHeight: '30vh',
                            alignItems: 'center',
                            py: 8,
                            backgroundColor: "background.default"
                        }}>

                        <Container maxWidth="xl">
                            <Typography
                                align="center"
                                variant="h4"
                                sx={{color: 'secondary.main', mb: 4, textTransform: 'uppercase'}}>
                                Mission & Vision
                            </Typography>
                            <Grid container={true} spacing={4}>
                                <Grid item={true} xs={12} md={6}>
                                    <Mission
                                        title="Mission"
                                        description="To satisfy our partners and customers with a unique shopping experience offering quality, variety, price and service, based on the attention and commitment of our employees."
                                        icon={<img src={mission} alt="" style={{height: 100, width: 100}}/>}/>
                                </Grid>
                                <Grid item={true} xs={12} md={6}>
                                    <Mission
                                        title="Vision"
                                        description="To become the number one mini-mart in our school by offering the most inviting buying environment in the industry while saving our customer time and money and building our brand to premier status."
                                        icon={<img src={vision} alt="" style={{height: 100, width: 100}}/>}/>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                    <Box pt={8} pb={8} sx={{backgroundColor: 'background.dark'}}>
                        <Container>
                            <Typography mb={2} variant="h4" align="center">Our Core Values</Typography>
                            <Grid container={true} spacing={2}>
                                {LUXURY_MART_DATA.CORE_VALUES.map((value, index) => {
                                    return (
                                        <Grid key={index} item={true} xs={12} md={4}>
                                            <CoreValue value={value}/>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Container>
                    </Box>

                    <Box sx={{py: 8}}>
                        <Container>
                            <Grid container={true} spacing={4} justifyContent="space-between" alignItems="center">
                                <Grid item={true} xs={12} md={4}>
                                    <CardMedia
                                        component="img"
                                        src={banner}
                                        sx={{
                                            borderBottomRightRadius: 4,
                                            borderTopRightRadius: 32,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 4,
                                            height: '100%',
                                            width: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        }}/>
                                </Grid>
                                <Grid item={true} xs={12} md={6}>
                                    <Box>
                                        <Typography variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                            Who We Are?
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            My team and I did market research and some surveys and we discovered that
                                            students normally stay late on campus so we realized that providing grocery
                                            services will enable students to snack during the night and enable them to
                                            study for longer hours without getting too hungry</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>

                    <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                        <Container>
                            <Grid spacing={4} container={true} justifyContent="space-between" alignItems="center">
                                <Grid item={true} xs={12} md={6}>
                                    <Box>
                                        <Typography variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                            What We Do?
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                                            The major portion of our business is retail and we are also highly placed in
                                            semi-wholesale and wholesale distribution due to the vast range of goods we
                                            stock.
                                            There are several contributing factors that have made luxury Mini-Mart the
                                            household
                                            name it is today. Our Minimart is committed to providing: Great service with
                                            a
                                            smile.
                                        </Typography>

                                        <Typography variant="h6" sx={{color: 'text.primary', mb: 4}}>
                                            We provide:
                                        </Typography>
                                        <Stack spacing={2}>
                                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                24/7 hour services.
                                            </Typography>
                                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                After-sales services
                                            </Typography>
                                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                Discounted prices of your first 5 purchases.
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item={true} xs={12} md={4}>
                                    <CardMedia
                                        component="img"
                                        src={banner}
                                        sx={{
                                            borderBottomRightRadius: 4,
                                            borderTopRightRadius: 32,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 4,
                                            height: '100%',
                                            width: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        }}/>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>

                    <Box sx={{py: 8}}>
                        <Container>
                            <Grid spacing={4} container={true} justifyContent="space-between" alignItems="center">
                                <Grid item={true} xs={12} md={4}>
                                    <CardMedia
                                        component="img"
                                        src={banner}
                                        sx={{
                                            borderBottomRightRadius: 4,
                                            borderTopRightRadius: 32,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 4,
                                            height: '100%',
                                            width: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        }}/>
                                </Grid>
                                <Grid item={true} xs={12} md={6}>
                                    <Box>
                                        <Typography variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                            Why We Exist?
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            My team and I did market research and some surveys and we discovered that
                                            students
                                            normally stay late on campus so we realized that providing grocery services
                                            will
                                            enable students to snack during the night and enable them to study for
                                            longer
                                            hours
                                            without getting too hungry.
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>

                    <Box sx={{py: 8, backgroundColor: 'background.paper'}}>
                        <Container maxWidth="xl">
                            <Box>
                                <Typography align="center" variant="h5" sx={{color: 'text.primary', mb: 4}}>
                                    Our Team
                                </Typography>
                                <Carousel
                                    autoPlay={true}
                                    autoPlaySpeed={5000}
                                    infinite={true}
                                    partialVisible={true}
                                    keyBoardControl={true}
                                    pauseOnHover={true}
                                    responsive={UTILS.responsive}>{LUXURY_MART_DATA.TEAM.map((team, index) => {
                                    return (
                                        <Box key={index}>
                                            <Team team={team}/>
                                        </Box>
                                    )
                                })}
                                </Carousel>
                            </Box>
                        </Container>
                    </Box>
                </Element>

                <Element id="contact" name="contact">
                    <Box
                        sx={{
                            minHeight: '30vh',
                            alignItems: 'center',
                            py: 8,
                            backgroundColor: "background.default"
                        }}>
                        <Container maxWidth="xl">
                            <Typography variant="h5" align="center" sx={{color: 'text.primary', mb: 4}}>
                                Contact Us
                            </Typography>
                            <Grid container={true} spacing={4}>
                                <Grid item={true} xs={12} md={4}>
                                    <Link href="#" rel="noopener" underline="none">
                                        <Card
                                            variant="outlined"
                                            sx={{
                                                borderBottomRightRadius: 16,
                                                borderTopRightRadius: 16,
                                                borderBottomLeftRadius: 16,
                                                borderTopLeftRadius: 0,
                                                height: '100%'
                                            }}>
                                            <CardContent>
                                                <Stack direction="column" spacing={3}>
                                                    <Stack direction="row" justifyContent="center">
                                                        <LocationOnOutlined
                                                            color="secondary"
                                                            sx={{
                                                                backgroundColor: 'light.secondary',
                                                                padding: 1,
                                                                fontSize: 36,
                                                                borderBottomRightRadius: 4,
                                                                borderTopRightRadius: 12,
                                                                borderBottomLeftRadius: 12,
                                                                borderTopLeftRadius: 4
                                                            }}/>
                                                    </Stack>
                                                    <Typography
                                                        variant="h6"
                                                        align="center"
                                                        sx={{color: 'text.primary'}}>
                                                        Address
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        align="center"
                                                        sx={{color: 'text.secondary'}}>
                                                        Haatso Agbogba, Accra Ghana
                                                    </Typography>
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Grid>

                                <Grid item={true} xs={12} md={4}>
                                    <Link href="mailto:info@luxurymart.com" underline="none">
                                        <Card
                                            sx={{
                                                borderBottomRightRadius: 16,
                                                borderTopRightRadius: 16,
                                                borderBottomLeftRadius: 16,
                                                borderTopLeftRadius: 0,
                                                height: '100%'
                                            }} variant="outlined">
                                            <CardContent>
                                                <Stack direction="column" spacing={3}>
                                                    <Stack direction="row" justifyContent="center">
                                                        <MailOutlined
                                                            color="secondary"
                                                            sx={{
                                                                backgroundColor: 'light.secondary',
                                                                padding: 1,
                                                                fontSize: 36,
                                                                borderBottomRightRadius: 4,
                                                                borderTopRightRadius: 12,
                                                                borderBottomLeftRadius: 12,
                                                                borderTopLeftRadius: 4
                                                            }}/>
                                                    </Stack>
                                                    <Typography
                                                        variant="h6"
                                                        align="center"
                                                        sx={{color: 'text.primary'}}>
                                                        Email
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        align="center"
                                                        sx={{color: 'text.secondary'}}>
                                                        info@luxurymart.com
                                                    </Typography>
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Grid>

                                <Grid item={true} xs={12} md={4}>
                                    <Link href="tel:+233(0)502019234" underline="none">
                                        <Card
                                            sx={{
                                                borderBottomRightRadius: 8,
                                                borderTopRightRadius: 34,
                                                borderBottomLeftRadius: 34,
                                                borderTopLeftRadius: 8,
                                                height: '100%'
                                            }} variant="outlined">
                                            <CardContent>
                                                <Stack direction="column" spacing={3}>
                                                    <Stack direction="row" justifyContent="center">
                                                        <CallOutlined
                                                            color="secondary"
                                                            sx={{
                                                                backgroundColor: 'light.secondary',
                                                                padding: 1,
                                                                fontSize: 36,
                                                                borderBottomRightRadius: 4,
                                                                borderTopRightRadius: 12,
                                                                borderBottomLeftRadius: 12,
                                                                borderTopLeftRadius: 4
                                                            }}/>
                                                    </Stack>
                                                    <Typography
                                                        variant="h6"
                                                        align="center"
                                                        sx={{color: 'text.primary'}}>
                                                        Phone
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        align="center"
                                                        sx={{color: 'text.secondary'}}>
                                                        +233 50 2019 234
                                                    </Typography>
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>

                    <Box sx={{py: 8, backgroundColor: 'background.default'}}>
                        <ContactForm
                            title="Send Message"
                            caption="Send us a message and our customer support will help you find answers to your questions."
                        />
                    </Box>
                </Element>

                <Element id="products" name="products">
                </Element>

            </Element>
        </Box>
    )
}

export default LandingPage;

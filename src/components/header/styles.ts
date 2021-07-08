import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    link: {
        color: 'black',
        '&:hover': {
            textDecoration: 'none',
        },
        '&:not(:first-child)': {
            paddingLeft: 15
        }
    },
    footerBackground: {
        background: theme.palette.background.default
    },
    socialBackground: {
        background: theme.palette.background.paper,
    },
    flexStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
            alignItems: 'start',
        },
    },
    imgMargin: {
        marginLeft: 'auto',
        [theme.breakpoints.up('lg')]: {
            marginLeft: '-100px',
        },
    },
    ArrowIcon: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: 'orange',
    }
}));
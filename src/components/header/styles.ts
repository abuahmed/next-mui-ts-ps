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
    listItems: {
        display: 'block',
        listStyleType: 'none',
        position: 'relative',
        li: {
            marginBottom: '0.5rem',
            textDecoration: 'none',
            a: {
                color: 'white',
                textDecoration: 'none',
                '&:hover': {
                    color: theme.palette.text.primary
                }
            }
        }
    }
}));
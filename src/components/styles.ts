import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    // shadow: {
    //     boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
    //     [theme.breakpoints.up('sm')]: {
    //         boxShadow: '0 .125rem .25rem rgba($black, .075)'
    //     }, [theme.breakpoints.up('lg')]: {
    //         boxShadow: '0 1rem 3rem rgba($black, .175)'
    //     },
    // },

    // backgroundCol: {
    //     background: theme.palette.background.default
    // },
    flexStyle: {
        [theme.breakpoints.up('xs')]: {
            flexDirection: 'column',
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
        },
    },
}));
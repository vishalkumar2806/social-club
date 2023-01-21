import { makeStyles } from "@mui/styles"


const makeStyle = makeStyles({
    navbtn: {
        backgroundColor: '#d41880', 
        '&:hover': {
            background: '#fff', color: '#bf219d'
        } ,
        '&:focus': {
            background: '#be2596', 
            color : 'white'
        }, marginLeft : 20 , marginTop : 5 , marginBottom : 5 
    },
    navbtnPrimary: {
        borderRadius: 20 
    } , 
    navbtnSecondary: {
        borderRadius: 20 
    } 
})


export default makeStyle
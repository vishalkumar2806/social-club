import { makeStyles } from "@mui/styles";



const makeStyle = makeStyles( (theme) => ({
   mainText: {
      fontFamily: 'Satisfy',
   } ,  
   style_card : { 
      background: 'linear-gradient(to bottom, rgba(252, 0, 255, 1) 0%, rgba(0, 219, 222, 1) 100%)',
      borderColor: 'rgba(0, 219, 222, 0.2)'
   }, number : {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      lineHeight: '1',
      textAlign: 'center',
      color: '#ffffff',
      width: '80px',
      height: '80px',
      borderRadius: '48px',
      borderStyle: 'solid',
      borderWidth: '8px',
      backgroundClip: 'padding-box'
   } , card_line : { 
      content: '\' \'',
      top: '0px',
      bottom: '0px',
      left: '50%',
      right: '50%',
      transform: 'translateX(-50%)',
      width: '2px',
      height: '80px'
   },
   card_line_style : { 
      background: 'linear-gradient(to bottom, rgba(252, 0, 255, 1) 0%, rgba(0, 219, 222, 1) 100%)'
   }
}))



export default makeStyle
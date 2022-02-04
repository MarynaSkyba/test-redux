import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { indigo, purple } from '@mui/material/colors';

import s from './Pagination.module.css'

// const theme = createTheme({
//   typography: {
//     button: {
//       fontSize: '1rem',
//     },
//   },
// });

// const theme = createTheme({
//     primary: {
//       main: purple[500],
//     }
// })


const theme = createTheme({
  palette: {
    primary: {
      main: '#000046',
    },
  },
});


const Paginations = () =>{
    return (

<div className={s.container}>
<ThemeProvider  theme={theme}>
<Stack spacing={2}>
      <Pagination 
        count={10}
        color="primary"
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
    </ThemeProvider>

    </div>
    )
}


export default Paginations;
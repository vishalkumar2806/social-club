import Navbar from '../components/navbar'
import Content from '../components/content'
import Footer from '../components/footer'
import { Stack } from '@mui/system'
import { Container} from '@mui/material'
import Whatsapp from '../components/chatsbutton/Whatsapp'

export default function Home() {
  return (
    <Stack>
      <Navbar />
      <Container>
        <Content />
      </Container>
      <Footer />
      <Whatsapp />
    </Stack>
  )
}

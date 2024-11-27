import '@styles/globals.css'
import Nav from '@components/Nav'
import Footer from '@components/Footer'



export const metaData = {
    title:'learnNextjs',
    description:'this is a demo app to learn nextjs'
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
  <body>
    <div className='main'>
   <div className='gradient' />
    </div>
    <main >
        <Nav/>
      {children}
      <Footer/>
    </main>
  </body>
    </html>
  )
}

export default Rootlayout
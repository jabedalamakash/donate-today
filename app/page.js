import Donateplan from '@/components/Donateplan'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Header from '@/components/Header'
import Pricing from '@/components/Pricing'
import Updates from '@/components/Updates'



export default function Home() {
  return (
    <main>
      <div>

       <Header />
       <Pricing/>
       <Donateplan/>
       <Gallery/>
       <Updates/>
       <Footer/>

        
      </div>
    </main>
  )
}

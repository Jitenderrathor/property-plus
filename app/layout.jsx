import '@/assets/styles/globals.css'
import Navbar from '@/conmpnents/Navbar'

export const metadata = {
  title: 'Property Plus',
  keywords: 'real estate, property, homes, apartments, buying, selling, renting',
  description: 'Discover Your Dream Home with Property Plus - Your Ultimate Real Estate Companion',
}
function MainLayout({ children }) {
  return (
    <html>
        <body>
          <Navbar />
            <main>{children}</main>
        </body>
    </html>
  )
}

export default MainLayout
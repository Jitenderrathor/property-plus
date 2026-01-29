import '@/assets/styles/globals.css'


export const metadata = {
  title: 'Property Plus',
  keywords: 'real estate, property, homes, apartments, buying, selling, renting',
  description: 'Discover Your Dream Home with Property Plus - Your Ultimate Real Estate Companion',
}
function MainLayout({ children }) {
  return (
    <html>
        <body>
            <main>{children}</main>
        </body>
    </html>
  )
}

export default MainLayout
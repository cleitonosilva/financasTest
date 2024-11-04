import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ticto Finance',
  description: 'Controle suas finanças',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="layout">
          <header className="header" />
          <main className="main">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
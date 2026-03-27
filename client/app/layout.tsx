import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "StitchVault - Google Stitch Prompt Library",
  description: "Curated library of Google Stitch prompts and design templates for vibe coders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppBar position="static">
            <Container maxWidth="lg">
              <Toolbar disableGutters>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
                    StitchVault
                  </Link>
                </Typography>
                <Button color="inherit" component={Link} href="/">
                  Home
                </Button>
                <Button color="inherit" component={Link} href="/categories">
                  Categories
                </Button>
              </Toolbar>
            </Container>
          </AppBar>
          <Container maxWidth="lg" sx={{ py: 4 }}>
            {children}
          </Container>
          <Box component="footer" sx={{ py: 3, textAlign: 'center', bgcolor: 'grey.100' }}>
            <Typography variant="body2" color="text.secondary">
              StitchVault - Curated Google Stitch Prompt Library for Vibe Coders
            </Typography>
          </Box>
        </Providers>
      </body>
    </html>
  );
}

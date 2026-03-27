'use client';

import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { mockPrompts } from './data';

export default function Home() {
  const [search, setSearch] = useState('');

  const filteredPrompts = mockPrompts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        StitchVault
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        Curated Google Stitch prompts for vibe coders
      </Typography>

      <TextField
        fullWidth
        placeholder="Search prompts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">🔍</InputAdornment>
          ),
        }}
        sx={{ mb: 4 }}
      />

      <Grid container spacing={3}>
        {filteredPrompts.map((prompt) => (
          <Grid item xs={12} sm={6} md={4} key={prompt.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  {prompt.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {prompt.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                  <Chip label={prompt.category} size="small" color="primary" />
                  {prompt.tags.slice(0, 2).map((tag) => (
                    <Chip key={tag} label={tag} size="small" variant="outlined" />
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  component={Link}
                  href={`/prompt/${prompt.id}`}
                >
                  View Prompt
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filteredPrompts.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h6" color="text.secondary">
            No prompts found matching your search
          </Typography>
        </Box>
      )}
    </Box>
  );
}

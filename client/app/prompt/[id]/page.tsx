'use client';

import { useParams } from 'next/navigation';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { mockPrompts } from '../data';
import { useState } from 'react';

export default function PromptDetail() {
  const params = useParams();
  const [copied, setCopied] = useState(false);
  
  const prompt = mockPrompts.find((p) => p.id === params.id);

  if (!prompt) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h5">Prompt not found</Typography>
        <Button component={Link} href="/" sx={{ mt: 2 }}>
          Back to Home
        </Button>
      </Box>
    );
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box>
      <Button 
        component={Link} 
        href="/" 
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 3 }}
      >
        Back to Home
      </Button>

      <Typography variant="h4" component="h1" gutterBottom>
        {prompt.title}
      </Typography>

      <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
        <Chip label={prompt.category} color="primary" />
        {prompt.tags.map((tag) => (
          <Chip key={tag} label={tag} variant="outlined" />
        ))}
      </Box>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        {prompt.description}
      </Typography>

      <Paper 
        sx={{ 
          p: 3, 
          bgcolor: 'grey.50',
          position: 'relative',
          border: '1px solid',
          borderColor: 'grey.200'
        }}
      >
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          Google Stitch Prompt
        </Typography>
        <Typography 
          variant="body1" 
          component="pre" 
          sx={{ 
            whiteSpace: 'pre-wrap',
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            lineHeight: 1.6
          }}
        >
          {prompt.prompt}
        </Typography>
        <Button
          variant="contained"
          startIcon={<ContentCopyIcon />}
          onClick={copyToClipboard}
          sx={{ mt: 2 }}
        >
          {copied ? 'Copied!' : 'Copy Prompt'}
        </Button>
      </Paper>
    </Box>
  );
}

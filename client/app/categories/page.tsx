'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { categories, mockPrompts } from '../data';

export default function Categories() {
  const getCategoryCount = (category: string) => 
    mockPrompts.filter((p) => p.category === category).length;

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Categories
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        Browse prompts by category
      </Typography>

      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={3} key={category}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {category}
                </Typography>
                <Typography variant="h3" color="primary">
                  {getCategoryCount(category)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {getCategoryCount(category) === 1 ? 'prompt' : 'prompts'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} href="/">
                  View Prompts
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

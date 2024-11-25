import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import useScrollPosition from "../../hooks/common/use-scroll-position";
import { useEffect, useState } from 'react';

const ScrollPositionComponent = () => {
  const [items, setItems] = useState<number[]>([1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(false);
  const scrollPosition = useScrollPosition();
  console.log(scrollPosition)
  
  const maxItems = 50; 

  // Lazy Loading function
  const loadMoreItems = () => {
    setLoading(true);
    setTimeout(() => {
      const nextItem = items.length + 1; 
      const newItems = Array.from(
        { length: 5 }, 
        (_, index) => nextItem + index
      );

      if (items.length < maxItems) {
        setItems((prevItems) => [
          ...prevItems,
          ...newItems.slice(0, maxItems - prevItems.length), 
        ]);
      }
      setLoading(false);
    }, 1000); 
  };

  useEffect(() => {
    if (scrollPosition >= 200 && !loading && items.length < maxItems) {
      loadMoreItems();
    }
  }, [scrollPosition, loading, items.length]);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box>
      {/* AppBar with scroll-triggered background color change */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: scrollPosition > 100 ? '#116466' : 'transparent',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Toolbar>
          <Typography variant="h6">Scroll down to Change Header Color ({Math.floor(scrollPosition)}px)</Typography>
        </Toolbar>
      </AppBar>

      {/* Main content area */}
      <Box sx={{ height: '2000px', padding: '16px' }}>
        <Typography variant="body1">
          The header background color will change as you scroll 50px.
        </Typography>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Lazy Load Content
          </Typography>
          <Box>
            {items.map((item) => (
              <Typography key={item} variant="h6">
                Item {item}
              </Typography>
            ))}
          </Box>
          {loading ? (
            <Typography variant="body1" color="primary">
              Loading more items...
            </Typography>
          ) : items.length >= maxItems ? (
            <Typography variant="body1" color="textSecondary">
              All items are loaded.
            </Typography>
          ) : null}
        </Box>
      </Box>

      {/* Back to Top Button */}
      <Box sx={{ position: 'fixed', bottom: 20, left: 20 }}>
        {scrollPosition > 300 && (
          <Button variant="contained" onClick={handleBackToTop}>
            Back to Top
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ScrollPositionComponent;

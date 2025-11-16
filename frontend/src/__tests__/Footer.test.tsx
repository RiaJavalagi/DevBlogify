import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        color: '#333',
        padding: '25px 0',
        marginTop: '5px',
        position: 'relative',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
      }}
    >
      {/* About Section */}
      <Typography
        variant="body1"
        component="p"
        sx={{
          maxWidth: '600px',
          margin: '0 auto 15px auto',
          fontSize: '0.95rem',
          lineHeight: 1.6,
        }}
      >
        DevBlogify is a simple and clean blogging platform where you can share
        your ideas, explore new topics, and stay inspired through meaningful content.
      </Typography>

      {/* Copyright */}
      <Typography variant="body2" component="p">
        &copy; {new Date().getFullYear()} DevBlogify. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

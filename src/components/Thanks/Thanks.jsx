import React from 'react';
import { Button } from '@material-ui/core';
import './Thanks.css';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  FacebookIcon,
  EmailIcon,
  InstapaperIcon
} from 'react-share';

const Thanks = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const shareUrl = 'https://sendavoice.netlify.com/';
  const title = 'Just sended a voice recording using Senavoice';

  return (
    <div className='thanks'>
      <h1>Thanks for your support!</h1>
      <Button onClick={handleClickOpen}>Share your good action</Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby='simple-dialog-title'
        open={open}
      >
        <DialogTitle id='simple-dialog-title'>
          Share on social media
        </DialogTitle>
        <DialogContent>
          <FacebookShareButton url={shareUrl} quote={title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>{' '}
          <EmailShareButton url={shareUrl} quote={title}>
            <EmailIcon size={32} round />
          </EmailShareButton>{' '}
          <InstapaperShareButton url={shareUrl} quote={title}>
            <InstapaperIcon size={32} round />
          </InstapaperShareButton>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default Thanks;

/*global chrome*/
import React, { useEffect, useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const EXTENSION_URL = "https://youtu.be/U-l4ya3ejko?si=2BmEysG7xMa3bG5e&t=75";

var isChrome =
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

export default function ExtensionDialog() {
  const [showExtensionDialog, setShowExtensionDialog] = useState(false);

  useEffect(() => {
    try {
      chrome.runtime.sendMessage(
        "jklpfhklkhbfgeencifbmkoiaokeieah",
        { message: {} },
        (response) => {
          if (!response || !response.installed) {
            setShowExtensionDialog(true);
          }
        }
      );
    } catch {
      setShowExtensionDialog(true);
    }
  }, []);

  return (
    <Dialog
      open={showExtensionDialog}
      onClose={() => {
        setShowExtensionDialog(false);
      }}
    >
      <DialogTitle>Downloads may be slow</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Metx recommends using {!isChrome && "Google Chrome with"} the official
          Metx Chrome extension for better download speeds and increased
          security.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setShowExtensionDialog(false);
          }}
        >
          Remind me later
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setShowExtensionDialog(false);
            window.open(EXTENSION_URL, "_blank").focus();
          }}
        >
          Coming Soon
        </Button>
      </DialogActions>
    </Dialog>
  );
}

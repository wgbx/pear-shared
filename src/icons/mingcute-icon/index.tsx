import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  Stack,
  TextField,
  Tooltip,
  Typography,
  type SvgIconProps,
} from '@mui/material';
import * as MingcuteIcons from '@svg/mingcute';
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
} from 'react';

// Using virtualization or pagination might be better, but for documentation purposes, we use simple truncation/lazy loading here
export function MingcuteIconGallery() {
  const [search, setSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState(200);
  const [copied, setCopied] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [iconSize, setIconSize] = useState<number>(32);
  const [iconColor, setIconColor] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const iconNames = useMemo(() => {
    return Object.keys(MingcuteIcons).filter((name) =>
      name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const visibleIcons = iconNames.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(200); // Reset visible count when search criteria changes
  }, [search]);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && visibleCount < iconNames.length) {
        setVisibleCount((prev) => Math.min(prev + 200, iconNames.length));
      }
    });

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [visibleCount, iconNames.length]);

  const handleIconClick = (name: string) => {
    setSelectedIcon(name);
    setDialogOpen(true);
    setIconSize(32);
    setIconColor('');
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setTimeout(() => setSelectedIcon(null), 200);
  };

  const handleCopy = (text: string, message: string) => {
    navigator.clipboard.writeText(text);
    setCopied(message);
  };

  return (
    <Box sx={{ width: '100%', py: 2 }}>
      <TextField
        fullWidth
        label="Search Icons"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 4 }}
      />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: 2,
        }}
      >
        {visibleIcons.map((iconName) => {
          const IconComponent = (
            MingcuteIcons as Record<string, ComponentType<SvgIconProps>>
          )[iconName];
          return (
            <Tooltip title={`Click to configure: ${iconName}`} key={iconName}>
              <Box
                onClick={() => handleIconClick(iconName)}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  overflow: 'hidden',
                  '&:hover': {
                    bgcolor: 'action.hover',
                    borderColor: 'primary.main',
                  },
                }}
              >
                <IconComponent
                  sx={{
                    fontSize: 32,
                    mb: 1,
                    color: 'text.primary',
                    flexShrink: 0,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    width: '100%',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {iconName}
                </Typography>
              </Box>
            </Tooltip>
          );
        })}
      </Box>

      {visibleCount < iconNames.length && (
        <Box ref={loadMoreRef} sx={{ textAlign: 'center', py: 4 }}>
          <Typography color="text.secondary">Loading more...</Typography>
        </Box>
      )}

      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>{selectedIcon}</DialogTitle>
        <DialogContent>
          {selectedIcon &&
            (() => {
              const SelectedIconComponent = (
                MingcuteIcons as Record<string, ComponentType<SvgIconProps>>
              )[selectedIcon];
              return (
                <Stack spacing={3} sx={{ mt: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      p: 3,
                      bgcolor: 'background.default',
                      borderRadius: 1,
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <SelectedIconComponent
                      sx={{
                        fontSize: iconSize,
                        color: iconColor || 'text.primary',
                      }}
                    />
                  </Box>
                  <TextField
                    label="Font Size (px)"
                    type="number"
                    value={iconSize}
                    onChange={(e) => setIconSize(Number(e.target.value))}
                    fullWidth
                  />
                  <TextField
                    label="Color (e.g. red, #ff0000, primary.main)"
                    type="text"
                    value={iconColor}
                    onChange={(e) => setIconColor(e.target.value)}
                    fullWidth
                  />
                </Stack>
              );
            })()}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={handleDialogClose}>Close</Button>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="outlined"
            onClick={() =>
              selectedIcon && handleCopy(selectedIcon, `Name: ${selectedIcon}`)
            }
          >
            Copy Name
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              if (!selectedIcon) return;
              const sxProps = [];
              if (iconSize !== 32) sxProps.push(`fontSize: ${iconSize}`);
              if (iconColor) sxProps.push(`color: '${iconColor}'`);

              let code = `<${selectedIcon} />`;
              if (sxProps.length > 0) {
                code = `<${selectedIcon} sx={{ ${sxProps.join(', ')} }} />`;
              }
              handleCopy(code, `React Code: ${code}`);
            }}
          >
            Copy Code
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={!!copied}
        autoHideDuration={2000}
        onClose={() => setCopied('')}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setCopied('')}
          severity="success"
          sx={{ width: '100%' }}
        >
          Copied {copied}
        </Alert>
      </Snackbar>
    </Box>
  );
}

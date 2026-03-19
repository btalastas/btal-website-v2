import { useRef, useState } from "react";
import { Box, Card, CardMedia, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SectionHeader from "../components/SectionHeader";

import baseball1 from "../assets/gallery/baseball-1.webp";
import baseball2 from "../assets/gallery/baseball-2.webp";
import bjorn1 from "../assets/gallery/bjorn-1.webp";
import bjorn2 from "../assets/gallery/bjorn-2.webp";
import bjorn3 from "../assets/gallery/bjorn-3.webp";
import bjornFriends from "../assets/gallery/bjorn-friends.webp";
import grad from "../assets/gallery/grad.webp";
import harleyBall from "../assets/gallery/harley-ball.webp";
import harleyBaby from "../assets/gallery/harley-baby.webp";
import harleyHat from "../assets/gallery/harley-hat.webp";
import harleySleep from "../assets/gallery/harley-sleep.webp";

const images = [
  { src: bjorn1, alt: "Bjorn mirror picture" },
  { src: bjorn2, alt: "Bjorn with Carlos" },
  { src: bjorn3, alt: "Bjorn at Washington Commanders game" },
  { src: bjornFriends, alt: "Bjorn celebrating friend's birthday" },
  { src: grad, alt: "Bjorn in graduation attire" },
  { src: harleyBall, alt: "Harley with ball in her mouth" },
  { src: harleyBaby, alt: "Harley as a kitten" },
  { src: harleyHat, alt: "Harley wearing a hat" },
  { src: harleySleep, alt: "Harley sleeping" },
  { src: baseball1, alt: "Bjorn at a Washington Nationals game" },
  { src: baseball2, alt: "Bjorn at a New York Yankees game" },
];

export default function Gallery() {
  const scrollerRef = useRef(null);
  const frameRef = useRef(null);
  const dragStateRef = useRef({
    isDragging: false,
    startX: 0,
    startScrollLeft: 0,
    nextScrollLeft: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  const getScrollAmount = () => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return 0;
    }

    const firstCard = scroller.querySelector("[data-gallery-card]");
    if (!firstCard) {
      return scroller.clientWidth * 0.8;
    }

    const cardStyles = window.getComputedStyle(firstCard);
    const gap = Number.parseFloat(cardStyles.marginRight || "0");

    return firstCard.clientWidth + gap + 16;
  };

  const scrollGallery = (direction) => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    scroller.scrollBy({
      left: direction * getScrollAmount(),
      behavior: "smooth",
    });
  };

  const handlePointerDown = (event) => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    scroller.setPointerCapture(event.pointerId);

    dragStateRef.current = {
      isDragging: true,
      startX: event.clientX,
      startScrollLeft: scroller.scrollLeft,
      nextScrollLeft: scroller.scrollLeft,
    };

    setIsDragging(true);
  };

  const handlePointerMove = (event) => {
    const scroller = scrollerRef.current;
    const dragState = dragStateRef.current;

    if (!scroller || !dragState.isDragging) {
      return;
    }

    const deltaX = event.clientX - dragState.startX;
    dragState.nextScrollLeft = dragState.startScrollLeft - deltaX;

    if (frameRef.current) {
      return;
    }

    frameRef.current = window.requestAnimationFrame(() => {
      scroller.scrollLeft = dragStateRef.current.nextScrollLeft;
      frameRef.current = null;
    });
  };

  const handlePointerUp = (event) => {
    const scroller = scrollerRef.current;

    if (scroller?.hasPointerCapture(event.pointerId)) {
      scroller.releasePointerCapture(event.pointerId);
    }

    dragStateRef.current.isDragging = false;
    setIsDragging(false);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 900, mx: "auto", overflowX: "hidden" }}>
      <SectionHeader
        title="Gallery"
        titleVariant="h4"
        subtitle="A few snapshots from life outside the code editor."
      />

      <Box sx={{ position: "relative", mt: 3, px: { xs: 0, sm: 7 } }}>
        <IconButton
          aria-label="Previous gallery image"
          onClick={() => scrollGallery(-1)}
          sx={{
            position: "absolute",
            left: { xs: 6, sm: 12 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "rgba(15, 23, 42, 0.78)",
            color: "text.primary",
            border: "1px solid",
            borderColor: "divider",
            transition: "transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease",
            "&:hover": {
              bgcolor: "primary.main",
              color: "background.default",
              borderColor: "primary.main",
              transform: "translateY(-50%) scale(1.06)",
            },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        <Box
          ref={scrollerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            scrollSnapType: isDragging ? "none" : "x mandatory",
            pb: 1,
            px: { xs: 0, sm: 1 },
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
            touchAction: "pan-y",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "& img": {
              pointerEvents: "none",
            },
          }}
        >
          {images.map((img) => (
            <Card
              key={img.alt}
              data-gallery-card
              sx={{
                flex: "0 0 auto",
                width: { xs: "80vw", sm: 340, md: 380 },
                scrollSnapAlign: "start",
              }}
            >
              <CardMedia
                component="img"
                image={img.src}
                alt={img.alt}
                loading="lazy"
                sx={{
                  height: { xs: 200, sm: 240, md: 280 },
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Card>
          ))}
        </Box>

        <IconButton
          aria-label="Next gallery image"
          onClick={() => scrollGallery(1)}
          sx={{
            position: "absolute",
            right: { xs: 6, sm: 12 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "rgba(15, 23, 42, 0.78)",
            color: "text.primary",
            border: "1px solid",
            borderColor: "divider",
            transition: "transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease",
            "&:hover": {
              bgcolor: "primary.main",
              color: "background.default",
              borderColor: "primary.main",
              transform: "translateY(-50%) scale(1.06)",
            },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

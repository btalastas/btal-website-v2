import { Box, Card, CardMedia, Typography } from "@mui/material";

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
  return (
    <Box sx={{ width: "100%", maxWidth: 1000 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, textAlign: "center" }}>
        Gallery
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
        }}
      >
        {images.map((img) => (
          <Card
            key={img.alt}
            sx={{
            flex: "0 0 auto",
            width: { xs: 340, sm: 520, md: 680 }, 
            borderRadius: 3,
            scrollSnapAlign: "start",
        }}
>
            <CardMedia
              component="img"
              image={img.src}
              alt={img.alt}
              loading="lazy"     
              sx={{ 
                aspectRatio: "4/3",

                /*height: { xs: 260, sm: 340, md: 420 }, */ 
                objectFit: "cover", }}
            />
          </Card>
        ))}
      </Box>
    </Box>
  );
}
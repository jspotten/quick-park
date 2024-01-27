import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function Blocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">
              Available Parking
            </h2>
            <p className="text-xl text-gray-400">
              {/* Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. */}
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="/images/fieldhouse.png"
                  alt="Fieldhouse Parking"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Fieldhouse &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        78 spots available
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Pay
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="/images/Lot 33.jpeg"
                  alt="DuckPond"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Duckpond  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        3 spots available
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Pay
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="/images/LOT 7 Marriot Center.jpeg"
                  alt="Marriot Center"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Marriot Center
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        3 spots available
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Pay $0.68
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </div>

            {/* 4th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="/images/LOT 2 West Stadium.jpeg"
                  alt="West Stadium"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        West Stadium
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        3 spots available
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Pay
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </div>

            {/* 5th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="/images/LOT 11 Hinckley Center.jpeg"
                  alt="Hinkley Center"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Hinckley Center
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        3 spots available
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Pay
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </div>

            {/* 6th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="/images/LOT 3 South East.jpeg"
                  alt="South East"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        South East Parking
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        3 spots available
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Pay
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </div>

            {/* 7th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="/images/LOT 8 Broadcast Building.jpeg"
                  alt="Broadcast Building"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Broadcast Building
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        3 spots available
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Pay
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  );
}

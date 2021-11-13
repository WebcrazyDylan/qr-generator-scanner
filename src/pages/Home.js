import { Grid, Button, Typography } from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiQrcode, mdiQrcodeScan } from "@mdi/js";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Typography style={{ margin: 20 }} variant="h2">
        QRCode Util
      </Typography>

      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography style={{ margin: 5 }} variant="h5">
            Generator
          </Typography>
          <Link to="/qr_generator">
            <Button variant="contained" size="large" color="primary">
              <Icon
                style={{ padding: 10 }}
                path={mdiQrcode}
                title="QR Generator"
                size={4}
                color="white"
              />
            </Button>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Typography style={{ margin: 5 }} variant="h5">
            Scanner
          </Typography>
          <Link to="/qr_scanner">
            <Button variant="contained" size="large" color="secondary">
              <Icon
                style={{ padding: 10 }}
                path={mdiQrcodeScan}
                title="QR Scanner"
                size={4}
                color="white"
              />
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;

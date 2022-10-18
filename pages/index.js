
import Image from "next/image";
import {
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Typography,
  Button,
  Divider,
  Container,
  Popover,
  Avatar,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";
import { Departments, Department_ug_credits } from "../components/departments";
import Convert from "../components/CGPAConverter";

export default function Home() {
  // setting the department and array of Sgpas.
  const [dept, setDept] = useState(null);
  const [cgpa, setCgpa] = useState(null);

  //sgpas of the 8 semesters
  const [f_sem, setFSem] = useState(null);
  const [se_sem, setSeSem] = useState(null);
  const [th_sem, setThSem] = useState(null);
  const [fo_sem, setFoSem] = useState(null);
  const [fif_sem, setFifSem] = useState(null);
  const [si_sem, setSiSem] = useState(null);
  const [sev_sem, setSevSem] = useState(null);
  const [ei_sem, setEiSem] = useState(null);

  //for the popover
  const [anchor, setAnchor] = useState(null);
  const openPopover = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const submitSgpa = (
    f_sem,
    se_sem,
    th_sem,
    fo_sem,
    fif_sem,
    si_sem,
    sev_sem,
    ei_sem
  ) => {
    let sgpa = [
      f_sem,
      se_sem,
      th_sem,
      fo_sem,
      fif_sem,
      si_sem,
      sev_sem,
      ei_sem,
    ];
    sgpa = sgpa.filter((grade) => grade !== null && grade <= 10);

    let result = Convert(sgpa, dept);
    setCgpa(result);
  };

  return (
    <>
      <Popover
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box sx={{ p: 2, width: 275 }}>
          <Avatar
            alt="Remy Sharp"
            src="/casual.jpg"
            sx={{ width: 60, height: 60 }}
          />
          <br />
          <Typography sx={{ color: "black" }}>
            Hey there !,
            <br />I am Himraj Gogoi, a CSE student from 2019-2023 batch.
            Enthusiastic about programming, coding and new technologies, made
            this application using the powerful Next.js framework. Wanna
            connect? Reach me on:
            <a href="https://www.linkedin.com/in/himraj-gogoi" target="__blank">
              <LinkedInIcon />
            </a>
            &nbsp;
            <a href="mailto:himrajgogoi2001@gmail.com" target="__blank">
              <EmailIcon />
            </a>
            &nbsp;
            <a href="https://github.com/Himrajgogoi" target="__blank">
              <GitHubIcon />
            </a>
          </Typography>
        </Box>
      </Popover>
      <Box
        sx={{
          padding: 8,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h3" sx={{ color: "black" }}>
          SGPA to CGPA Converter{" "}
          <InfoOutlinedIcon size="large" onClick={openPopover} />
        </Typography>

        <br />
        {cgpa && (
          <Typography variant="h5" sx={{ color: "green" }}>
            Your current CGPA:<b> {cgpa}</b>
          </Typography>
        )}
        <br />
        <br />
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          autoComplete="off"
        >
          <Grid container>
            <Grid item xs={12} lg={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <FormControl sx={{ m: 1, width: 218 }} required>
                  {/* required
                id="outlined-number"
                label="Department"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }} */}
                  <InputLabel id="dept">Department</InputLabel>
                  <Select
                    onChange={(e) => setDept(parseInt(e.target.value))}
                    labelId="dept"
                    input={<OutlinedInput label="Department" />}
                  >
                    {Departments.map((name, index) => (
                      <MenuItem key={index} value={index}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  required
                  label="First Sem SGPA"
                  placeholder="Leave blank if no SGPA"
                  type="number"
                  InputProps={{ inputProps: { max: 10, min: 0 } }}
                  onChange={(e) => setFSem(parseFloat(e.target.value))}
                />

                <TextField
                  required
                  label="Second Sem SGPA"
                  placeholder="Leave blank if no SGPA"
                  type="number"
                  onChange={(e) => setSeSem(parseFloat(e.target.value))}
                />

                <TextField
                  required
                  label="Third Sem SGPA"
                  placeholder="Leave blank if no SGPA"
                  type="number"
                  onChange={(e) => setThSem(parseFloat(e.target.value))}
                />

                <TextField
                  required
                  label="Fourth Sem SGPA"
                  placeholder="Leave blank if no SGPA"
                  type="number"
                  onChange={(e) => setFoSem(parseFloat(e.target.value))}
                />

                <TextField
                  required
                  label="Fifth Sem SGPA"
                  placeholder="Leave blank if no SGPA"
                  type="number"
                  onChange={(e) => setFifSem(parseFloat(e.target.value))}
                />

                <TextField
                  required
                  label="Sixth Sem SGPA"
                  placeholder="Leave blank if no SGPA"
                  type="number"
                  onChange={(e) => setSiSem(parseFloat(e.target.value))}
                />

                <TextField
                  required
                  label="Seventh Sem SGPA"
                  placeholder="Leave blank if no SGPA"
                  type="number"
                  onChange={(e) => setSevSem(parseFloat(e.target.value))}
                />

                <TextField
                  required
                  label="Eighth Sem SGPA"
                  placeholder="Leave blank if no SGPA"
                  type="number"
                  onChange={(e) => setEiSem(parseFloat(e.target.value))}
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Container>
                <Box>
                  <Typography variant="subtitle1" sx={{ color: "black" }}>
                    Formula used:
                  </Typography>
                  <br />
                  <Image
                    src="/cgpa_formula.png"
                    alt="formula"
                    height="150px"
                    width="350px"
                  />
                </Box>
                <br />
                <Divider
                  variant="middle"
                  sx={{ width: "100%", display: { xs: "none", lg: "block" } }}
                />

                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                  <video autoPlay playsInline muted loop>
                    <source src="57-server-outline.mp4" type="video/mp4" />
                  </video>
                </Box>
              </Container>
            </Grid>
          </Grid>
        </Box>
        <br />
        <Divider variant="middle" style={{ width: "50%" }} />
        <br />
        <Button
          type="button"
          variant="contained"
          size="large"
          onClick={() =>
            submitSgpa(
              f_sem,
              se_sem,
              th_sem,
              fo_sem,
              fif_sem,
              si_sem,
              sev_sem,
              ei_sem
            )
          }
        >
          Check
        </Button>
      </Box>
    </>
  );
}

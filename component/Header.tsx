import {
  Badge,
  Box,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    top: 3,
    border: `3px solid ${theme.palette.background.paper}`,
    padding: "0 1px",
  },
}));
const Header: NextPage = () => {
  return (
    <Box
      p="2rem"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      maxWidth="80rem"
    >
      <Typography variant="h4" gutterBottom fontWeight="300">
        UCOMMERCE
      </Typography>
      <Box width={{ sm: "18rem", md: "25rem", lg: "40rem" }}>
        <OutlinedInput
          id="outlined-adornment-weight"
          value=""
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon cursor="pointer" />
            </InputAdornment>
          }
          fullWidth
          size="small"
          placeholder="Search For Products, Brands & Categories"
        />
      </Box>

      <Box display="flex" gap={1}>
        <StyledBadge color="secondary" badgeContent={1} showZero>
          <FavoriteBorderIcon />
        </StyledBadge>
        <PermIdentityOutlinedIcon />
        <StyledBadge color="secondary" badgeContent={4} showZero>
          <ShoppingCartOutlinedIcon />
        </StyledBadge>
      </Box>
    </Box>
  );
};

export default Header;

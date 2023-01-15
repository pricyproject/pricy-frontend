import { IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import { Search } from "react-iconly";
import Image from "next/image";
import { alertComingSoon } from "../../utils/helper";

const SearchField = React.memo(() => {
    return (
        <TextField
            hiddenLabel
            placeholder="What product are you looking for?"
            variant="outlined"
            className="h-14 w-full"
            InputProps={{
                classes: {
                    notchedOutline: "border-none",
                    root: "border-none rounded-full h-14 bg-neutral-bg1 max-w-[33rem]",
                },
                startAdornment: (
                    <span className="mr-4 pt-1">
                        <Search primaryColor="#A7A7A7" />
                    </span>
                ),
                endAdornment: (
                    <IconButton
                        onClick={alertComingSoon}
                        className="mr-1 rounded-full bg-other-3 whitespace-nowrap h-10 px-4 flex items-center text-neutral-bg1 xs:hidden"
                    >
                        <Typography variant="body3" className="mr-1 pt-1">
                            All Categories
                        </Typography>
                        <span className="pt-1">
                            <Image
                                src="/images/icons/arrow-bottom.svg"
                                width={12}
                                height={12}
                                color="red"
                                layout="fixed"
                                priority
                            />
                        </span>
                    </IconButton>
                ),
            }}
        />
    );
});

export default SearchField;

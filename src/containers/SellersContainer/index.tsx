import { MenuItem, Select } from "@mui/material";
import React from "react";

type Props = {
    title: string;
    variant: number;
    children: React.ReactNode;
    filterByOptions: string[];
    filteredBy: string;
    handleChangeFilter: void | any;
};
const SellersContainer: React.FC<Props> = ({
    title,
    variant,
    children,
    filterByOptions,
    filteredBy,
    handleChangeFilter,
}) => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="text-primary-1">{title}</div>
                <div>
                    <Select
                        variant="outlined"
                        value={filteredBy}
                        className="font-medium"
                        sx={{
                            ".MuiOutlinedInput-notchedOutline": {
                                border: "unset",
                            },
                        }}
                        onChange={handleChangeFilter}
                    >
                        {filterByOptions.map(name => (
                            <MenuItem value={name}>{name}</MenuItem>
                        ))}
                    </Select>
                </div>
            </div>
            <div>{children}</div>
        </div>
    );
};
export default SellersContainer;

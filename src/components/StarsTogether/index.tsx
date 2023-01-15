import React from "react";
import { Star } from "react-iconly";
import { generateArrayByLength, roundHalf } from "../../utils/helper";

interface Props {
    rate: number;
    size?: number | undefined;
}

const StarsTogether: React.FC<Props> = ({ rate, size = 14 }) => {
    const [roundedRate, isHalf] = `${roundHalf(rate)}`.split(".");
    const arr = generateArrayByLength(parseInt(roundedRate, 10));

    return (
        <div className="flex items-center">
            {arr.map((_, index) => (
                <Star
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    set="two-tone"
                    filled
                    size={size}
                    primaryColor="#FFF"
                />
            ))}
            {isHalf ? (
                <Star set="bulk" size={size} primaryColor="#FFF" />
            ) : null}
        </div>
    );
};
export default StarsTogether;

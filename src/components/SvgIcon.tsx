import Logo from '@assets/icons/marker.svg?react';
import {COLORS} from "../shared/constants/theme.ts";
import type {SvgIconProps} from "../shared/types/types.ts";

const SvgIcon = ({
                     fill = 'success'
                 }: SvgIconProps) => {

    const fillColor = COLORS.fill[fill];

    return (
        <Logo className={`${fillColor}`} width={30} height={30}/>
    );
};

export default SvgIcon;
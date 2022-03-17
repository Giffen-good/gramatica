import {Icons} from "@/components/IconList";
import React from 'react'
const IconBuilder = ({name}) => {
    const Icon = Icons[name];
    return (
        <span className={'h-5 w-5'}>
           <Icon />
        </span>
    )
}
export default IconBuilder;

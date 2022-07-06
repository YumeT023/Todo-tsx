import React, { useEffect, useState } from 'react';
import { OptionI } from '../../Models/form.interface';
import { StatusT } from '../../Models/list.model';
import { constructCheckOptionsFromString } from '../../Operations/fn.helper';
import { Button } from './Button';

export const CheckOptions: React.FC<{labels: StatusT[]}> = ({labels}) => {

    const [options, setOptions] = useState<OptionI[]>(constructCheckOptionsFromString(labels));

    useEffect(() => {

        const tmp = [...options];
        tmp[0].status = true;
        setOptions(tmp);

    }, []);
    
    const handleClick = (index: number): void => {
        let tmp = [...options].map(option => {
            return {...option, status: false}
        });

        tmp[index].status = true;

        setOptions(tmp);
    }

    return (
        <div className="CheckOptions">
            {
                options.map((option, index) => {
                    const {label, status} = option;

                    return (
                        <Button 
                            label={label}
                            color={status ? 'success' : ''}
                            onClick={() => handleClick(index)}
                            key={index}
                        />
                    )
                })
            }
        </div>
    );
}
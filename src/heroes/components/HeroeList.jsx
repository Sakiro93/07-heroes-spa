import React, { useMemo } from 'react'
import PropTypes from 'prop-types';

import { getHeroesByPublisher } from '../helpers'
import { HeroeCard } from './';

export const HeroeList = ({ publisher }) => {
    const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher]);
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero => (
                    <HeroeCard 
                    key={ hero.id }
                    {...hero} />
                ))
            }
        </div>
    )
}

HeroeList.propTypes = {
    publisher : PropTypes.string.isRequired,
}
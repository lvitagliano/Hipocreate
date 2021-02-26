import React from 'react'
import { Link, Image } from './style'

const DEFAULT_IMAGE = 'http://lorempixel.com/120/120'

export const Avatar = ({ cover = DEFAULT_IMAGE, size, marginT }) => (
  <Link>
    <Image src={cover} size={size} margin={marginT}/>
  </Link>
)
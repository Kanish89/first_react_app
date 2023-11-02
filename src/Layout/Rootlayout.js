import React from 'react'

import Myaccount from '../Screen/Myaccount';
import { Outlet} from "react-router-dom";

export default function Rootlayout() {
  return (
    <>
    
    <Outlet/>
    </>
  )
}

import React from 'react';
import { Redirect } from 'react-router';
import { Cutaway } from '../containers/Cutaway/Cutaway';
import { Forecast } from '../containers/Forecast/Forecast';

export const appRouteMap = {
   cutaway: {
      path: '/cutaway',
      component: [
         <Cutaway key="cutaway"/>
      ],
   },

   forecast: {
      path: '/forecast',
      component: [
         <Forecast key="forecast"/>
      ]
   },

   default: {
      path: '*',
      component: <Redirect to={'/cutaway'}/>
   },

}
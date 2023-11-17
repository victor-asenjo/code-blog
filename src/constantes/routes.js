import React from 'react';
import Notes from '../pages/Notes';
import PythonCheatSheet from '../pages/PythonCheatSheet';
import JavaCheatSheet from '../pages/JavaCheatSheet';
import ReactCheatSheet from '../pages/ReactCheatSheet';
import Ias from '../pages/Ias';
import Practice from '../pages/Practice';
import PracticeInterviews from '../pages/PracticeInterviews';
import PracticeCode from '../pages/PracticeCode';
import Create from '../pages/Create';
import IasText from '../pages/IasText';



const routes = [
  {
    path: '/',
    element: <Notes />,
    children: [
      { path: '/python', element: <PythonCheatSheet /> },
      { path: '/java', element: <JavaCheatSheet /> },
      { path: '/react', element: <ReactCheatSheet /> },
    ],
  },
  {
    path: '/ias',
    element: <Ias />,
    children: [
      { path: '/ias/text', element: <IasText /> },
    ],
  },
  {
    path: '/practice',
    element: <Practice />,
    children: [
      { path: '/practice/code', element: <PracticeCode /> },
      { path: '/practice/interviews', element: <Create /> },
    ],
  },
  {
    path: '/shortcuts',
    element: <Notes />, // Replace with actual Shortcuts component
  },
];

export default routes;

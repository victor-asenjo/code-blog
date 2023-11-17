import React from 'react';
import { SubjectOutlined, AddCircleOutline, Code, QuestionAnswer } from '@mui/icons-material';

const menuItem = [
  {
    text: 'Languages CheatSheets',
    icon: <SubjectOutlined />,
    path: '/',
    children: [
      { text: 'Python', path: '/python', icon: <Code /> },
      { text: 'Java', path: '/java', icon: <Code /> },
      { text: 'React', path: '/react', icon: <Code /> },
    ],
  },
  {
    text: 'IAs',
    icon: <QuestionAnswer />,
    path: '/ias',
    children: [
      { text: 'Text', path: '/ias/text', icon: <SubjectOutlined /> },
    ],
  },
  {
    text: 'Practice',
    icon: <Code />,
    path: '/practice',
    children: [
      { text: 'Code', path: '/practice/code', icon: <Code /> },
      { text: 'Interviews', path: '/practice/interviews', icon: <QuestionAnswer /> },
    ],
  },
  {
    text: 'Shortcuts',
    icon: <AddCircleOutline />,
    path: '/shortcuts',
    // Add more children if needed
  },
];

export default menuItem;

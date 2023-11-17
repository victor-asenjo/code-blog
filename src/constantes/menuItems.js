import React from 'react';
import { SubjectOutlined, QuestionAnswer } from '@mui/icons-material';
// React Icons
import { DiPython, DiReact, DiJava, DiCode } from "react-icons/di";
import { AiFillRobot } from "react-icons/ai";
import { GiKeyboard } from "react-icons/gi";
import { HiAcademicCap } from "react-icons/hi";

const iconSize = 24; // Set the desired size for your icons

const menuItem = [
  {
    text: 'CheatSheets',
    icon: <SubjectOutlined style={{ fontSize: iconSize }} />,
    path: '/',
    children: [
      { text: 'Python', path: '/python', icon: <DiPython size={iconSize} /> },
      { text: 'Java', path: '/java', icon: <DiJava size={iconSize} /> },
      { text: 'React', path: '/react', icon: <DiReact size={iconSize} /> },
    ],
  },
  {
    text: 'IAs',
    icon: <AiFillRobot style={{ fontSize: iconSize }} />,
    path: '/ias',
    children: [
      { text: 'Text', path: '/ias/text', icon: <SubjectOutlined style={{ fontSize: iconSize }} /> },
    ],
  },
  {
    text: 'Practice',
    icon: <HiAcademicCap style={{ fontSize: iconSize }} />,
    path: '/practice',
    children: [
      { text: 'Code', path: '/practice/code', icon: <DiCode size={iconSize} /> },
      { text: 'Interviews', path: '/practice/interviews', icon: <QuestionAnswer style={{ fontSize: iconSize }} /> },
    ],
  },
  {
    text: 'Shortcuts',
    icon: <GiKeyboard style={{ fontSize: iconSize }} />,
    path: '/shortcuts',
    // Add more children if needed
  },
];

export default menuItem;
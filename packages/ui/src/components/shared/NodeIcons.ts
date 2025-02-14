import { FC } from "react";
import { AiOutlineMergeCells } from "react-icons/ai";
import { FaUserCircle, FaRobot, FaPlay, FaLink, FaFilm, FaImage } from 'react-icons/fa';

export const ICON_MAP: { [key: string]: FC } = {
  'FaUserCircle': FaUserCircle,
  'FaRobot': FaRobot,
  'FaPlay': FaPlay,
  "FaLink": FaLink,
  "FaFilm": FaFilm,
  "FaImage": FaImage,
  "AiOutlineMergeCells": AiOutlineMergeCells,
};

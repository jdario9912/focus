import React from 'react';
import { AiFillEnvironment } from "react-icons/ai";
import BackArrow from '../componentes/back-arrow';
import imgPerfil from '../img/temporales/feed/avatars/ph2.JPG';
import { IoPersonOutline, IoImagesSharp } from "react-icons/io5";
import { MdOutlineCamera } from "react-icons/md";
import { BiStar } from "react-icons/bi";

const styleBtn = 'flex items-center gap-2',
      styleText = 'border-b w-full text-left first-letter:capitalize font-semibold pb-2';


const Profile = () => {
  return (
    <div className='bg-purple-700 h-screen w-screen p-4'>
      <BackArrow href={'/home'}/>
      <div className="flex flex-col items-center pt-12">
        <img src={ imgPerfil } alt="" className='w-1/4 rounded-full'/>
        <p className='capitalize'>marcelo martínez</p>
        <div className="flex">
          <AiFillEnvironment />
          <p className='font-light text-sm capitalize'>argentina</p>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <button className={ styleBtn }>
          <IoPersonOutline className='text-2xl' />
          <p className={ styleText }>datos personales</p>
        </button>
        <button className={ styleBtn }>
          <MdOutlineCamera className='text-2xl' />
          <p className={ styleText }>mis proyectos</p>
        </button>
        <button className={ styleBtn }>
          <IoImagesSharp className='text-2xl' />
          <p className={ styleText }>fotos</p>
        </button>
        <button className={ styleBtn }>
          <BiStar className='text-2xl' />
          <p className={ styleText }>valoraciones</p>
        </button>
      </div>
    </div>
  );
}

export default Profile;

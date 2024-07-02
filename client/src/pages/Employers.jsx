import React, { useEffect } from 'react';
import EmployersTop from '../components/EmployersTop';
import EmployersMiddleUp from '../components/EmployersMiddleUp';
import EmployersMiddleBottom from '../components/EmployersMiddleBottom';
import EmployersBottom from '../components/EmployersBottom';

function useBodyBackground(classes) {
  useEffect(() => {
    const classArray = classes.split(' ');
    classArray.forEach(className => document.body.classList.add(className));
    return () => {
      classArray.forEach(className => document.body.classList.remove(className));
    };
  }, [classes]);
}

export default function Employers() {
  useBodyBackground('bg-gradient-to-b from-purple-500 via-yellow-300 to-red-400');

  return (
    <>
      <EmployersTop />
      <EmployersMiddleUp />
      <EmployersMiddleBottom />
      <EmployersBottom />
    </>
  );
}

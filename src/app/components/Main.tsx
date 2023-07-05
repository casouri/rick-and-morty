'use client'

import { Head } from 'next/document';
import { useState } from 'react';

import AvatarGrid from './AvatarGrid';
import Paginator from './Paginator';


type MainProps = {
};

const Main = () => {

  const [page, setPage] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const [totalPage, setTotalpage] = useState(5);

  return (
    <main>
      <h1>Rick And Morty Characters</h1>
      <AvatarGrid
        page={page}
        setTotalPage={setTotalpage}
      />
      <Paginator
        page={page}
        setPage={setPage}
        startPage={startPage}
        setStartPage={setStartPage}
        limit={5}
        total={totalPage}
      />
    </main>
  );
}

export default Main;

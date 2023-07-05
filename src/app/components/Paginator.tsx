import classNames from 'classnames';

import Icon from './Icon';

type PaginatorProps = {
  /** Current page, counts from 1. */
  page: number;
  /** Setter for page. */
  setPage: (page: number) => void;
  /** The first page in the paginator. */
  startPage: number;
  /** Setter for startPage. */
  setStartPage: (page: number) => void;
  /** How many pages to show. */
  limit: number;
  /** How many pages there are in total. */
  total: number;
};

const Paginator = ({
  page,
  setPage,
  startPage,
  setStartPage,
  limit,
  total,
}: PaginatorProps) => {
  const maxStartPage = total - (total % limit) + 1;

  const prev = () => {
    setStartPage(Math.max(1, startPage - limit));
  };

  const next = () => {
    setStartPage(Math.min(maxStartPage, startPage + limit));
  };

  const gotoPage = (page: number) => () => {
    sessionStorage.setItem('scrollY', window.scrollY.toString());
    setPage(page);
  };

  let buttons = [];
  for (
    let thisPage = startPage;
    thisPage < Math.min(startPage + limit, total + 1);
    thisPage++
  ) {
    buttons.push(
      <button
        key={thisPage}
        onClick={gotoPage(thisPage)}
        className={classNames({ 'paginator-current-page': thisPage === page })}
      >
        {thisPage}
      </button>
    );
  }
  buttons = [
    <button key='first' onClick={prev} disabled={startPage === 1}>
      <Icon name='chevron_left'/>
    </button>,
    ...buttons,
    <button key='last' onClick={next} disabled={startPage === maxStartPage}>
      <Icon name='chevron_right'/>
    </button>,
  ];

  return <div className='paginator'>{buttons}</div>;
};

export default Paginator;

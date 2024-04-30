'use client';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.css';

export default function Pagination({
  handlePageClick,
  pageCount,
  currentPage,
}: {
  handlePageClick: (data: { selected: number }) => void;
  pageCount: number;
  currentPage: number;
}) {
  return (
    <ReactPaginate
      previousLabel={'‹'}
      nextLabel={'›'}
      activeClassName={`${styles.item} ${styles.active}`}
      breakClassName={`${styles.item}`}
      onPageChange={handlePageClick}
      breakLabel={''}
      containerClassName={styles.pagination}
      disabledClassName={styles.disabledPage}
      marginPagesDisplayed={0}
      nextClassName={`${styles.item} ${styles.next}`}
      previousClassName={`${styles.item} ${styles.next}`}
      pageClassName={styles.item}
      pageCount={pageCount}
      pageRangeDisplayed={8}
      forcePage={currentPage}
      renderOnZeroPageCount={null}
    />
  );
}

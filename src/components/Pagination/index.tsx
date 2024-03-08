import ReactPaginate from "react-paginate";
import { ARTICLES_PER_PAGE } from "../../helpers/consts";
import { PageChangeData } from "../../types/Feed";
import "./style.scss";
interface Pagination {
  amount: number;
  page: number;
  changePage: (data: PageChangeData) => void;
}
const Pagination = ({ amount, changePage, page }: Pagination) => {
  return (
    <>
      <ReactPaginate
        pageCount={Math.ceil(amount / ARTICLES_PER_PAGE - 1)}
        pageRangeDisplayed={amount / ARTICLES_PER_PAGE}
        previousLabel={null}
        nextLabel={null}
        containerClassName="pagination"
        pageClassName="pagination__item"
        activeLinkClassName="pagination__item-link-active"
        pageLinkClassName="pagination__item-link"
        onPageChange={changePage}
        forcePage={page}
      />
    </>
  );
};

export default Pagination;

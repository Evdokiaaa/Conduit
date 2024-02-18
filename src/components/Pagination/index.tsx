import ReactPaginate from "react-paginate";
import { ARTICLES_PER_PAGE } from "../../helpers/consts";
import "./style.scss";
interface Pagination {
  amount: number;
}
const Pagination = ({ amount }: Pagination) => {
  return (
    <>
      <ReactPaginate
        pageCount={amount / ARTICLES_PER_PAGE}
        pageRangeDisplayed={amount / ARTICLES_PER_PAGE}
        previousLabel={null}
        nextLabel={null}
        containerClassName="pagination"
        pageClassName="pagination__item"
        activeLinkClassName="pagination__item-link-active"
        pageLinkClassName="pagination__item-link"
      />
    </>
  );
};

export default Pagination;

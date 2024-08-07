

const Pagination=({currentPage,totalPage,onPageChange})=>{
  const isFirstPage=currentPage===1;
  const isLastPage= currentPage===totalPage;
       return (
        <>
        <div>
            <button onClick={()=>onPageChange(currentPage-1)}>
            </button>
            <span>{currentPage} of {totalPage}</span>
            <button onClick={()=>onPageChange(currentPage+1)}></button>
            </div>
        </>
       )
}
export default Pagination;
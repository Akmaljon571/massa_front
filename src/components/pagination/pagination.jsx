import useStart from '../../hooks/useStart';
import vector from '../../img/Vector 255.svg'
import './pagination.scss'

function Pagination() {
    const { page, setPage } = useStart()

    const changePage = (son, txt) => {
        if (son) {
            setPage(son)
        } else if (txt === 'next') {
            if (page === 4) {
                setPage(1)
            } else {
                setPage(page + 1)
            }
        } else if (txt === 'prev') {
            if (page === 1) {
                setPage(4)
            } else {
                setPage(page - 1)
            }
        }
    }

    return ( 
        <section className="pagination">
            <img onClick={() => changePage(0, 'prev')} className='left' src={vector} alt="Vector" />
            <ul>
                <li onClick={() => changePage(1, '')} className={page === 1 ? 'active' : ""}>
                    <hr />
                    1
                </li>
                <li onClick={() => changePage(2, '')} className={page === 2 ? 'active' : ""}>
                    <hr />
                    2
                </li>
                <li onClick={() => changePage(3, '')} className={page === 3 ? 'active' : ""}>
                    <hr />
                    3
                </li>
                <li onClick={() => changePage(4, '')} className={page === 4 ? 'active' : ""}>
                    <hr />
                    4
                    <hr className='end' />
                </li>
            </ul>
            <img  onClick={() => changePage(0, 'next')} className='right' src={vector} alt="Vector" />
        </section>
    );
}

export default Pagination;